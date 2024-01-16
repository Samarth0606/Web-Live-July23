const express = require("express");
const { isLoggedIn } = require("../middleware");
const User = require("../models/User");
const Product = require("../models/product");
const router = express.Router();

router.get("/user/cart", isLoggedIn, async (req, res) => {
  let userId = req.user._id;
  let user = await User.findById(userId).populate("cart");
  //   console.log(user, "sam");
  let totalAmount = user.cart.reduce((sum, curr) => sum + curr.price, 0);
  //   console.log(totalAmount);

  res.render("cart/cart", { user, totalAmount });
});

router.post("/user/:productId/add", isLoggedIn, async (req, res) => {
  let { productId } = req.params;
  let userId = req.user._id;
  let user = await User.findById(userId);
  //   console.log(user, "sam");
  let product = await Product.findById(productId);
  user.cart.push(product);
  await user.save();
  res.redirect("/user/cart");
});

module.exports = router;
