import 'babel-polyfill'
import express from 'express'

let app = express()
const port = process.env.PORT || 3001

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