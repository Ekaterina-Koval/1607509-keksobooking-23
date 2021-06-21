import { createCardsArray } from './data/create-temporary-data.js';
import './data/create-markup-cards.js';
import { disabledElementsWithPerrent, enabledElementsWithPerrent } from './form/change-page-state.js';

createCardsArray();

disabledElementsWithPerrent('ad-form', 'fieldset');
enabledElementsWithPerrent('ad-form', 'fieldset');
disabledElementsWithPerrent('map__filters', 'select, fieldset');
enabledElementsWithPerrent('map__filters', 'select, fieldset');
