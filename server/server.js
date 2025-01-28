import express from "express";
import { getProducts } from "./api/products.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Learning Integrating Redis Caching using Node.js...");
});

app.get("/products", async (req, res) => {
  const products = await getProducts();
  res.json({
    products,
  });
});

app.listen(4000, () => {
  console.log("Server is listening at http://localhost:4000");
});
