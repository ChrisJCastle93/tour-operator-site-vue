const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const { v4: uuidv4 } = require('uuid');
const Order = require("../models/Order.model");


router.post("/create-order", async (req, res) => {
    const order = {
        id: uuidv4(),
        products: req.body.cart,
        paid: false,
        name: req.body.name,
        email: req.body.email,
    };
    Order.create(order).then((order) => {
        res.status(200).json(order.id);
    }).catch ((error) => {
        res.status(500).json(error);
    });
});

router.post("/create-checkout-session", async (req, res) => {
    console.log(req.body)
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "EUR",
            product_data: {
              name: "Test Product",
            },
            unit_amount: (req.body.cartTotal * 100).toFixed(0),
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.ORIGIN}/order-result/${req.body.id}?success=true`,
      cancel_url: `${process.env.ORIGIN}/order-result/${req.body.id}?canceled=true`,
    });
    res.json({ url: session.url });
});

module.exports = router;
