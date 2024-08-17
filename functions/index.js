const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

// Configure CORS to allow requests from multiple origins
app.use(cors());
app.use(express.json());

// Root route for health check
app.get("/", (_req, res) => {
    res.status(200).json({ message: "Success!" });
    logger.info("Root endpoint hit");
  });
  
// Payment creation route
app.post("/payment/create", async (req, res) => {
  try {
    const total = parseInt(req.query.total, 10);

    if (isNaN(total) || total <= 0) {
      logger.warn("Invalid total value received", { total });
      return res.status(400).json({ message: "Total must be a positive number" });
    }

    logger.info("Payment received", { total });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });

    logger.info("PaymentIntent created", { id: paymentIntent.id });

    res.status(201).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    logger.error("Error creating PaymentIntent", { error });
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Export the Express app as a Firebase Function
exports.app = onRequest(app);


