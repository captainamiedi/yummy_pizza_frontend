const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
<<<<<<< HEAD
const publicPath = path.join(__dirname, '.', 'public');
=======
const publicPath = path.join(__dirname, '..', 'public');
>>>>>>> 38cc4eea85274320e74183bda8dcfc92cbba0d0a
app.use(express.static(publicPath));
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, 'build')));
// app.get('/ping', function (req, res) {
//  return res.send('pong');
// });
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
 app.listen(port, () => {
    console.log('Server is up!');
 });