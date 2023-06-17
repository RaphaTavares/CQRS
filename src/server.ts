import express from 'express';
import authRoutes from './routes/auth';
const app = express();

app.use(authRoutes);

app.listen(3000, () => {
    console.log("Server up and running!");
});
