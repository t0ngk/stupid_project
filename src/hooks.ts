import * as dotenv from 'dotenv';
dotenv.config();
const mongoURL = process.env.MONGO_URL ?? 'mongodb://localhost:27017/';
import mongoose from 'mongoose';

mongoose.connect(mongoURL);
