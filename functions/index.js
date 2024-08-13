

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

// Configure CORS to allow requests from your frontend origin
app.use(cors({ origin: "http://localhost:3000" }));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Success !" });
});

app.post("/payment/create", async (req, res) => {
    const total = parseInt(req.query.total);

    if (total > 0) {
        console.log("payment received", total);
        
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency: "usd",
        });
        console.log(paymentIntent);

        res.status(201).json({ 
            clientSecret: paymentIntent.client_secret });
    } else {
        res.status(403).json({ message: "Total must be greater than 0" });
    }
});

exports.app = onRequest(app);
