var socket = io.connect('http://localhost:4050');
socket.on('data', function(data) {
  ReactDOM.render(React.createElement(table, data), document.getElementById('app'));
});

const table = createReactClass({
  render: function() {
    var cols = [
        {  label: 'Id ' },
        {  label: 'Url ' },
        {  label: 'User_agent ' },
        {  label: 'Blocked ' }
    ];


        return React.createElement("table", null,
          React.createElement("body", null,
            React.createElement("tr", null,
             cols.map(function(colData) {
               return React.createElement ("th", null,colData.label)})

          ),
          React.createElement("td", null,
           this.props.results.map(function(colData) {
             return React.createElement ("tr", null,colData.id)})

        )
          ,
          React.createElement("td", null,
           this.props.results.map(function(colData) {
             return React.createElement ("tr", null,colData.url)})

        ),
        React.createElement("td", null,
         this.props.results.map(function(colData) {
           return React.createElement ("tr", null,colData.user_agent)})

      ),
      React.createElement("td", null,
       this.props.results.map(function(colData) {
         return React.createElement ("tr", null,colData.blocked)})

    )
        ))
        //console.log(this.props.results[0]);
  //  return React.createElement("p", null, JSON.stringify(this.props))
}
})
