import * as express from 'express';
import * as methodOverride from 'method-override';
import { engine } from 'express-handlebars';
import 'express-async-errors';
import { handleError } from './utils/errors';
import { homeRouter } from './routes/home';
import { addRouter } from './routes/create';
import { fightRouter } from './routes/fight-arena';
import { hallOfFameRouter } from './routes/hall-of-fame';
import { handlebarsHelpers } from './utils/handlebars-helpers';

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(express.static('public'));
app.engine('.hbs', engine({
  helpers: handlebarsHelpers,
  extname: '.hbs',
}));
app.set('veiw engine', '.hbs');

app.use('/', homeRouter);
app.use('/create', addRouter);
app.use('/fight-arena', fightRouter);
app.use('/hall-of-fame', hallOfFameRouter);

app.use(handleError);

app.listen(3000, 'localhost', () => {
  console.log('Listening on http://localhost:3000');
});
