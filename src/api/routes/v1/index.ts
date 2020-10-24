/*
Routes file
*/
import * as express from 'express';
import authRoutesPg from './sql/auth.routes';
import filmRoutesPg from './sql/film.routes';

const router = express.Router();
router.use('/auth',authRoutesPg);
router.use('/film',filmRoutesPg);

export default router;
