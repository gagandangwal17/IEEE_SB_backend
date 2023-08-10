import express from 'express'
import { connect } from './db-connector';
import cors from 'cors';
import contactus from './controllers/contact-us.controller';
import register from './controllers/register.controller';
import router from './routes/main';

const app = express();

(async () => {
    await connect()
    app.use(express.json())
    app.use(cors())
    app.use('/api', router);
  app.listen(3000)
  console.log('Server started on port 3000')
})()