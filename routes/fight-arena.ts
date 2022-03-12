import { Router } from 'express';
import { WarriorRecord } from '../records/warrior.record';
import { Arena } from '../libs/arena';
import { ValidationError } from '../utils/errors';

export const fightRouter = Router();

fightRouter
  .get('/', async (req, res) => {
    const warriorsList = await WarriorRecord.listAll();

    res.render('fight-arena.hbs', {
      warriorsList,
    });
  })

  .post('/fight', async (req, res) => {
    const warrior1 = await WarriorRecord.getOne(req.body.warr1);
    const warrior2 = await WarriorRecord.getOne(req.body.warr2);

    if (warrior1.id === warrior2.id) {
      throw new ValidationError('Choose two different warriors');
    }

    const arena = new Arena(warrior1, warrior2);
    arena.fight();
    const fightDetails = arena.details;

    res.render('fight-details.hbs', {
      fightDetails,
      warrior1,
      warrior2,
    });
  });
