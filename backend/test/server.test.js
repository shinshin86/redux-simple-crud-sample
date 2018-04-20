const request = require('supertest')
const expect= require('expect')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var routes = require('../api/routes/userRoutes');

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
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
        /*
        .expect((res) => {
            console.log(res.body)
            expect(res.body).toInclude({
                name:'testuesr',
                role: 1,
            })
        })
        */
        .end((err, res) => {
          if (err) return done(err)
          done()
        })
    })
    it('Should not return send not exists user data', (done) => {
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
