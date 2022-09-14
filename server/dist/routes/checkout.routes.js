var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);
const { v4: uuidv4 } = require('uuid');
const Order = require("../models/Order.model");
router.post("/find-order", (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log('finding order', req.body.id, req.body.name);
    Order.find({
        $or: [{ id: req.body.id }, { name: req.body.name }],
    })
        .then((order) => {
        console.log('FOUND ORDER', order);
        res.status(200).json(order);
    })
        .catch((error) => {
        res.status(500).json(error);
    });
}));
router.post("/create-order", (req, res) => __awaiter(this, void 0, void 0, function* () {
    const order = {
        id: uuidv4(),
        products: req.body.cart,
        paid: false,
        name: req.body.name,
        email: req.body.email,
    };
    Order.create(order).then((order) => {
        res.status(200).json(order.id);
    }).catch((error) => {
        res.status(500).json(error);
    });
}));
router.post("/create-checkout-session", (req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log(req.body);
    const session = yield stripe.checkout.sessions.create({
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
}));
module.exports = router;
