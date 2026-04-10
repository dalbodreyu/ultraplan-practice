const express = require('express');
const app = express();

// 사용자 목록 API
app.get('/users', (req, res) => {
  res.json([
    { id: 1, name: '달보드레', email: 'dal@test.com' },
    { id: 2, name: '클라우드', email: 'cloud@test.com' }
  ]);
});

// 상품 목록 API
app.get('/products', (req, res) => {
  res.json([
    { id: 1, name: '노트북', price: 1200000 },
    { id: 2, name: '키보드', price: 89000 }
  ]);
});

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중!');
});
