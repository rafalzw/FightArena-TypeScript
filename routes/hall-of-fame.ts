import { Router } from 'express';
import { WarriorRecord } from '../records/warrior.record';

export const hallOfFameRouter = Router();

hallOfFameRouter
  .get('/', async (req, res) => {
    const topWarriorsList = await WarriorRecord.listTop();

    res.render('hall-of-fame.hbs', {
      topWarriorsList,
    });
  });
