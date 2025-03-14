import express from 'express';
import connectDB from './lib/connectDb.js';
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import webhookRouter from './routes/webhook.route.js';
import { clerkMiddleware } from '@clerk/express';
import cors from 'cors';

const app = express();

app.use(cors(process.env.CLIENT_URL));

app.use(clerkMiddleware());
app.use('/webhooks', webhookRouter);
app.use(express.json());

app.use('/users', userRouter);
app.use('/posts', postRouter);
app.use('/comments', commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);

  res.json({
    message: error.message || 'Internal Server Error',
    status: error.status || 500,
    stack: error.stack,
  });
});

app.listen(3000, () => {
  connectDB();
  console.log('Server is running on port 3000');
});
