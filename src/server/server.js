import 'babel-polyfill'
import express from 'express'

let app = express()
const port = process.env.PORT || 3001


var webPush = require('web-push');

if (!process.env.VAPID_PUBLIC_KEY || !process.env.VAPID_PRIVATE_KEY) {
  console.log("You must set the VAPID_PUBLIC_KEY and VAPID_PRIVATE_KEY "+
    "environment variables. You can use the following ones:");
  console.log(webPush.generateVAPIDKeys());
  return;
}
// Set the keys used for encrypting the push messages.
webPush.setVapidDetails(
  'https://serviceworke.rs/',
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);


app.use (express.static (`${__dirname}/../../public`))

app.get ('/', (req, res) => {
  res.send ('index.html')
})

app.get('/vapidPublicKey', function(req, res) {
    res.send(process.env.VAPID_PUBLIC_KEY);
  });

  app.post('/register', function(req, res) {
    // A real world application would store the subscription info.
    res.sendStatus(201);
  });

  app.post('/sendNotification', function(req, res) {
    setTimeout(function() {
      webPush.sendNotification(req.body.subscription)
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(error) {
        res.sendStatus(500);
        console.log(error);
      });
    }, 10000);
  });

app.listen (port, console.log (`Started listening on port ${port}`))