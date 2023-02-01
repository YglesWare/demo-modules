import { Meteor } from 'meteor/meteor';
import * as billing from '../modules/billing'

Meteor.startup(() => {
  billing.printSide();
  billing.common.print('Hello');
});
