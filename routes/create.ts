import { Router } from 'express';
import { WarriorRecord } from '../records/warrior.record';

export const addRouter = Router();

addRouter
  .get('/', (req, res) => {
    res.render('create.hbs');
  })

  .post('/', async (req, res) => {
    const newWarrior = new WarriorRecord(req.body);
    await newWarrior.insert();
    res.render('added.hbs', {
      newWarrior,
    });
  });
