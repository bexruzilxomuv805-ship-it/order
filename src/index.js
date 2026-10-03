import express from 'express';
import 'dotenv/config';
import logger from './middlewares/logger.js';
import orderRoutes from './routes/order.routes.js';

const app = express();
app.use(express.json());
app.use(logger.log);

app.use('/api/orders', orderRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is working...');
});
