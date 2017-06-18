import passport from 'passport';

import controllers from '../controllers';

const userController = controllers.User;
const roleController = controllers.Role;

module.exports = (app) => {
  app.get('/home', (req, res) => {
    res.status(200).send({
      message: 'The document management system'
    });
  });
  app.post('/users', userController.create);
  app.post('/roles', roleController.create);
  app.post('/users/login', userController.login);
  app.get('/efe', passport.authenticate('jwt', {
    session: false
  }), (req, res) => {
    res.json({ message: 'passport works' });
  });
};