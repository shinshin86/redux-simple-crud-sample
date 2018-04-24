const request = require('supertest')
const expect= require('expect')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var userRoutes = require('../api/routes/userRoutes');
var testRoutes = require('../api/routes/testRoutes');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

userRoutes(app);
testRoutes(app);

describe('CRUD Sample Server', () => {
  describe('/test', () => {
    it('Should be get OK text', (done) => {
      request(app)
        .get('/test')
        .end((err, res) => {
          if (err) return done(err)

          expect(res.text).toBe('OK')
          done();
        })
      })
  })
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
  describe('/user/new', () => {
    it('Should be register user', (done) => {
      request(app)
        .post('/user/new')
        .type('form')
        .send({
          name: "testuser",
          role: 1
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })
  describe('/user/:userId', () => {
    it('Should return specify user data', (done) => {
      const userId = 1
      request(app)
        .get(`/user/${userId}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
    it('Should return 200 status even if not exists user data', (done) => {
      const userId = 99999999999
      request(app)
        .get(`/user/${userId}`)
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
  })
})
