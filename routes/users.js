const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    { id: 1, name: '달보드레', email: 'dal@test.com' },
    { id: 2, name: '클라우드', email: 'cloud@test.com' }
  ]);
});

module.exports = router;
