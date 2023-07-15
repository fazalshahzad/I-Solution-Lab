const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookie = require("cookie"); // Added cookie module

app.use(cors({
  origin: ['https://i-solution-lab.vercel.app'],
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

// config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

// import routes
const user = require("./controller/user");
const shop = require("./controller/shop");
const product = require("./controller/product");
const event = require("./controller/event");
const coupon = require("./controller/coupounCode");
const payment = require("./controller/payment");
const order = require("./controller/order");
const conversation = require("./controller/conversation");
const message = require("./controller/message");
const withdraw = require("./controller/withdraw");

app.use("/api/v2/user", user);
app.use("/api/v2/conversation", conversation);
app.use("/api/v2/message", message);
app.use("/api/v2/order", order);
app.use("/api/v2/shop", shop);
app.use("/api/v2/product", product);
app.use("/api/v2/event", event);
app.use("/api/v2/coupon", coupon);
app.use("/api/v2/payment", payment);
app.use("/api/v2/withdraw", withdraw);

// Error handling middleware
app.use(ErrorHandler);

// Set SameSite and Secure attributes for cookies
app.use((req, res, next) => {
  // Get existing cookies
  const cookies = req.headers.cookie || '';
  const parsedCookies = cookie.parse(cookies);

  // Set SameSite and Secure attributes for all cookies
  const modifiedCookies = Object.keys(parsedCookies).map((cookieName) => {
    const originalCookie = parsedCookies[cookieName];
    const modifiedCookie = cookie.serialize(cookieName, originalCookie, {
      sameSite: "none", // Set SameSite attribute to "None"
      secure: true, // Set Secure attribute to true
    });
    return modifiedCookie;
  });

  // Set the modified cookies in the response headers
  res.setHeader("Set-Cookie", modifiedCookies);

  next();
});

module.exports = app;
