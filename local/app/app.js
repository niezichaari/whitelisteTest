var socket = io.connect('http://localhost:4050');
socket.on('data', function (data) {
  ReactDOM.render(React.createElement(table, data), document.getElementById('app'));
});

const table = createReactClass({
  render: function() {
/*    return React.createElement("table", null,
      React.createElement("tbody", null,
        React.createElement("tr", null,
          React.createElement("td", null,
            "hey")
        )
      )
    );*/ return React.createElement("p", null,JSON.stringify(this.props))
  }
})
