const request = require('supertest')
const express = require('express')

const app = express()
var routes = require('../api/routes/userRoutes');
routes(app);

describe('CRUD Sample Server', () => {
  describe('/users', () => {
    it('Should be get users data', (done) => {
      request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err);
          done();
        });
    })
  })
})
