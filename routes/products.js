const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: '노트북', price: 1200000 },
    { id: 2, name: '키보드', price: 89000 }
  ]);
});

module.exports = router;
