module.exports = (app) => {
  const handyUtils = require('handyutils');
  /*
  LANDING PAGE
  */
  app.get('/', (req, res) => {
        res.render('home');
  });
  /*
  LANDING PAGE
  */
  app.get('/downloadpdf', (req, res) => {
    console.log(req);
        res.download('public/docs/Paul_Diederichs_Resume-01-11-2018.pdf', 'Paul_Diederichs_Resume.pdf');
  });
};
