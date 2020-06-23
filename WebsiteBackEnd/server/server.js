// Copyright IBM Corp. 2016,2019. All Rights Reserved.
// Node module: loopback-workspace
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

'use strict';

const loopback = require('loopback');
const boot = require('loopback-boot');

const app = module.exports = loopback();

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    const baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      const explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});

app.models.user.find((err, result) => {
  if (result.length === 0) {
    const user = {
      email: 'clubwonni@gmail.com',
      password: 'test',
      username: 'Sangwon',
    };

    app.models.user.create(user, (err, result) => {
      console.log('Tried to create user', err, result);
    });
  }
});

app.models.user.afterRemote('create', (ctx, user, next) => {
  console.log('New user is', user);
  app.models.Profile.create({
    // eslint-disable-next-line camelcase
    first_name: user.username,
    // eslint-disable-next-line camelcase
    created_at: new Date(),
    userId: user.id,
  }, (err, result) => {
    if (!err && result) {
      console.log('Created new profile!', result);
    } else {
      console.log('There is an error', err);
    }
  });
  next();
});

app.models.Role.find({where: {name: 'admin'}}, (err, role) => {
  if (!err && role) {
    console.log('No error. Role is ', role);
    if (role.length === 0) {
      app.models.Role.create({
        name: 'admin',
      }, (err2, role) => {
        if (!err2 && role) {
          app.models.user.findOne((userErr, user) => {
            if (!userErr && user) {
              role.principals.create({
                principalType: app.models.RoleMapping.USER,
                principalId: user.id,
              }, (err3, principal) => {
                console.log('Principal created', err3, principal);
              });
            }
          });
        }
      });
    }
  }
});

app.models.Role.find({where: {name: 'editor'}}, (err, roles) => {
  if (!err && roles) {
    if (roles.length === 0) {
      app.models.Role.create({
        name: 'editor',
      }, (creationErr, result) => {
        console.log('Editor', creationErr, result);
      });
    }
  }
});
