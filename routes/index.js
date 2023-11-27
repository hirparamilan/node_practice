const router = require("express").Router();
let currentArray = [];

router.get("/data", (req, res) => {
  // res.json(randomIntArrayInRange(0, 99, 500));

  const sortedNumbers = currentArray.sort((a, b) => a - b);
  res.json(sortedNumbers);
});

const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

router.post("/data", (req, res) => {
  const numbers = req.body;
  console.log("numbers length = " + numbers.length);

  if (!Array.isArray(numbers)) {
    return res.status(400).json({ error: "Input must be an array" });
  }

  if (numbers.length !== 500) {
    return res
      .status(400)
      .json({ error: "Numbers array must contain exactly 500 numbers" });
  }

  const areAllNums = numbers.every((num) => typeof num === "number");
  if (!areAllNums) {
    return res
      .status(400)
      .json({ error: "All elements in the array must be numbers" });
  }

  currentArray = numbers;

  res.json(numbers);
});

router.patch("/data", (req, res) => {
  const number = req.body.number;
  if (typeof number !== "number") {
    return res.status(400).json({ error: "Input must be a number" });
  }

  currentArray.push(number);
  const sortedNumbers = currentArray.sort((a, b) => a - b);
  res.json(sortedNumbers);
});

module.exports = router;
