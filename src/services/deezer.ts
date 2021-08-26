import express, { json, Request, Response, Router } from 'express';
import axios from 'axios';

const deezer = express();
deezer.use(json());

const routes = Router();
routes.get('/chart', async (req: Request, res: Response) => {
  const { data } = await axios.get('https://api.deezer.com');
  return res.json({data})
})

// const deezer = axios.create({
//   baseURL: 'https://api.deezer.com'
// });

deezer.listen(process.env.PORT || 3000);
