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
        label: 'date & time '
      },
      {
        label: 'Blocked '
      },
      {
        label: 'nombre de fois'
      }
    ];
    //Function from w3school to customize sort
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
    //sort by alphabetical order
    var rept = this.props.results.sort(sort_by('url', false, function(a) {
      return a.toUpperCase()
    }));
    ;
    //count repetition of every urls to get the final number
    let count = 0;
    let pr = rept[0].url;
    let sum = rept.map((e, i) => {
      if (e.url == pr) {
        count++;
        pr = e.url;
        if (i == rept.length - 1) {
          e.nbr_de_fois = count;
        }
      } else {
        rept[i-1].nbr_de_fois = count;
        count = 1
        pr = e.url;
      }
    })
    return React.createElement("table", {
        style: {
          border: "3px solid #6495ed",
          padding: "0.5rem",
          bordercollapse: "collapse",
          emptycells: "hide"

        }
      },
      React.createElement("body", null,
        React.createElement("tr", null,
          cols.map(function(colData) {
            return React.createElement("th", {
              style: {
                borderLeft: "1px solid #6495ed",
                borderBottom: "1px solid #6495ed",
                bordercollapse: "collapse"
              }
            }, colData.label)
          })

        ),
        React.createElement("td", {
            style: {
              border: "1px solid #6495ed",
              bordercollapse: "collapse"

            }
          },
          this.props.results.map(e=> {
            return React.createElement("tr", {
              style: {
                border: "1px solid #6495ed",
                bordercollapse: "collapse"
              }
            }, e.url)
          })

        ),
        React.createElement("td", {
            style: {
              border: "1px solid #6495ed",
              bordercollapse: "collapse"
            }
          },
          this.props.results.map(function(colData) {
            return React.createElement("tr", {
              style: {
                border: "1px solid #6495ed",
                bordercollapse: "collapse"
              }
            }, colData.user_agent)
          })

        ),
        React.createElement("td", {
            style: {
              border: "1px solid #6495ed",
              bordercollapse: "collapse"

            }
          },
          this.props.results.map(function(colData) {
            return React.createElement("tr", {
              style: {
                border: "1px solid #6495ed",
                bordercollapse: "collapse"

              }
            }, colData.date_time)
          })

        ),
        React.createElement("td", {
            style: {
              border: "1px solid #6495ed",
              bordercollapse: "collapse"

            }
          },
          this.props.results.map(function(colData) {
            return React.createElement("tr", {
              style: {
                border: "1px solid #6495ed",
                bordercollapse: "collapse"

              }
            }, colData.blocked)
          })

        ),
        React.createElement("td", {
            style: {
              border: "1px solid #6495ed",
              bordercollapse: "collapse"
            }
          },
          this.props.results.map((e,i)=> {
            if (e.nbr_de_fois!=null) {
              return React.createElement("tr", {
                style: {
                  border: "1px solid #6495ed",
                  padding: "0.5rem",
                  bordercollapse: "collapse",
                }
              }, e.nbr_de_fois)
            }
            else {
              return React.createElement("tr", {
                style: {
                  border: "1px solid #6495ed",
                  padding: "0.5rem",
                  bordercollapse: "collapse",
                }
              }, "_")
            }

          })

        )
      ))


  }
})
