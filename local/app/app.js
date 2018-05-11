var socket = io.connect('http://localhost:4050');
socket.on('data', function(data) {
  ReactDOM.render(React.createElement(table, data), document.getElementById('app'));
});

const table = createReactClass({
  render: function() {
    var cols = [{
        label: 'Url '
      },
      {
        label: 'User_agent '
      },
      {
        label: 'Blocked '
      },
      {
        label: 'nombre de fois'
      }
    ];
    var nbr_de_fois =[];
    var sort_by = function(field, reverse, primer) {

      var key = function(x) {
        return primer ? primer(x[field]) : x[field]
      };

      return function(a, b) {
        var A = key(a),
          B = key(b);
        return ((A < B) ? -1 : (A > B) ? +1 : 0) * [-1, 1][+!!reverse];
      }
    }
    var rept = this.props.results.sort(sort_by('url', false, function(a) {
      return a.toUpperCase()
    })); //pour un tri alphabetique insensible à la casse
    ;
    let test = 0;
    var pr=rept[0].url;
    let sum = rept.map(e => {
      if (e.url==pr) {
        test++;
        pr=e.url;
        return test
      }
      else {
        nbr_de_fois.push(test);
        console.log(nbr_de_fois);
        console.log(test);
        console.log(rept);
        test = 1
        pr=e.url;
      }
    
    })
    return React.createElement("table", null,
      React.createElement("body", null,
        React.createElement("tr", null,
          cols.map(function(colData) {
            return React.createElement("th", null, colData.label)
          })

        ),
        React.createElement("td", null,
          this.props.results.map(function(colData) {
            return React.createElement("tr", null, colData.url)
          })

        ),
        React.createElement("td", null,
          this.props.results.map(function(colData) {
            return React.createElement("tr", null, colData.user_agent)
          })

        ),
        React.createElement("td", null,
          this.props.results.map(function(colData) {
            return React.createElement("tr", null, colData.blocked)
          })

        )
      ))


  }
})
