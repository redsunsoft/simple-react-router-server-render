
var express = require('express'),
	app = express(),
	React = require('react'),
	Router = require('react-router'),
	RouteHandler = Router.RouteHandler,
    Route = Router.Route; 

var App = React.createClass({displayName: "App",
  render: function () {
    return React.createElement("div", null, "Hi");
  }
});

var routes = (
  React.createElement(Route, {handler: App, path: "/"})
);

// if using express it might look like this
app.use(function (req, res) {
  // pass in `req.url` and the router will immediately match
  Router.run(routes, req.url, function (Handler) {
    var content = React.renderToString(React.createElement(Handler, null));
    res.send('<!DOCTYPE html><html><head><title>Netflix</title></head><body>' + content + '</body></html>');
  });
});

app.listen(8181);