'use strict'

const conn = require('../../db')

exports.allUser = (req, res) => {
  conn.query('SELECT id, name, role FROM user',
            ((err, dbRes, field) => {
              if(err)
                res.send(err)
              res.send(dbRes)
            }))              
};

exports.createUser = (req, res) => {
  conn.query('INSERT INTO user SET ?',
              {name: req.body.name,
               role: req.body.role},
               (err, dbRes, fields) => {
                 if(err)
                   res.send(err)
                  res.send(dbRes)
               })
}

exports.readUser = (req, res) => {
  conn.query('SELECT id, name, role FROM user WHERE id = ?',
              [req.params.userId],
              (err, dbRes, fields) => {
                if(err)
                  res.send(err)
                res.send(dbRes)
              })
}


exports.updateUser= (req, res) => {
  conn.query('UPDATE user SET name = ?, role = ? WHERE id = ?',
              [req.body.name,
               req.body.role,
               req.params.userId],
              (err, dbRes, fields) => {
                if(err)
                  res.send(err)
                res.send(dbRes)
              })
}

exports.deleteUser = (req, res) => {
  conn.query('DELETE FROM user WHERE id = ?',
              [req.params.userId],
              (err, dbRes, fields) => {
                if(err)
                  res.send(err)
                res.send(dbRes)
              })
}
