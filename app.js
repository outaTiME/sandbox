
var
  connect = require('connect'),
  app = connect.createServer();

/*
app.use(connect.logger('dev'));
app.use(connect.basicAuth(function (user, pass) {
  return user === 'skycop' & pass === 'stafuzza';
}));
*/

app.use(connect.static(__dirname + "/vendor"));
// app.use("/static", connect.static(__dirname + "/vendor/geolocation-track"));
// app.use("/static", express.static(__dirname + "/alternate_static"));
app.use(connect.directory(__dirname + "/vendor"));

// app.use(connect.static(__dirname + '/public'));

app.listen(process.env.PORT || 3001, function () {
  console.log("Listening on port %d", this.address().port);
});
