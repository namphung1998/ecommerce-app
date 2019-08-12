const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/payment', (req, res) => {
  const { token, amount } = req.body;
  const body = {
    source: token.id,
    amount: amount,
    currency: 'usd'
  }

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      return res.status(500).send({ error: stripeErr });
    }

    return res.status(200).send({ success: stripeRes });
  })
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
  app.get('*', (req, res) => {
    return res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 8080;
app.listen(port, err => {
  if (err) throw err;

  console.log('Server listening on port', port);
});
