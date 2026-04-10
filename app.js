const express = require('express');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const { notFoundHandler, errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/users', usersRouter);
app.use('/products', productsRouter);

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`서버가 ${PORT}번 포트에서 실행 중!`);
});
