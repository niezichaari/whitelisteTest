const app = require("express")();
const con = require("./DB.js");
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use('/dashboard', require('express').static(__dirname + '/app'))


con.connect(function(err) {
  
  //get all the tested urls and emit data with socket.io to have a real time results

  if (err) throw err;
  io.on('connection', function(socket) {
    con.query('SELECT * from tested_urls', function(error, results, fields) {
      if (error) throw error;
      socket.emit("data", {
        results
      });
    })
  });

  //test if the url is allowed or not then add it to the tested urls

  app.use("/api/is-allowed/:url", (req, res, next) => {
    let origin = req.param('url')

    con.query('SELECT * from whiteliste', function(error, results, fields) {
      if (error) throw error;
      let canPass = results.map(e => {
        if (origin.indexOf(e.domain) != -1) {
          return true
        } else return false;
      }).reduce((p, c) => {
        return p || c
      }, false)
      if (canPass === true) {
        let querry = `insert into tested_urls (url, user_agent, date_time, blocked) values ('${origin}','${req.get('user-agent')}',now(),false)`;
        con.query(querry, function(error) {

          con.query('SELECT * from tested_urls', function(error, results, fields) {
            if (error) throw error;
            socket.emit("data", {
              results
            });
          })
        })

        return res.status(200).send();
      } else {
        let querry = `insert into tested_urls (url, user_agent, date_time, blocked) values ('${origin}','${req.get('user-agent')}',now(),true)`;
        con.query(querry, function(error) {

          con.query('SELECT * from tested_urls', function(error, results, fields) {
            if (error) throw error;
            socket.emit("data", {
              results
            });
          })
        })

        return res.status(403).send();
      }


    });

  });


})

server.listen(4050);
