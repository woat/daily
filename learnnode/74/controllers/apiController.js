module.exports = function (app) {
  app.post('/api/person', (req, res) => {
    // save to database
  });

  app.get('/api/person/:id', () => {
    // get from database
  });

  app.delete('/api/person/:id', () => {
    // delete from database
  });
};
