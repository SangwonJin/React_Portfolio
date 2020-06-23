'use strict';

var models = require('./server').models;

// var toSave = [
//     {name: 'Sangwon', email: 'clubwonni@gmail.com'},
//     {name: 'Sangwon1', email: 'clubwonni1@gmail.com'},
//     {name: 'Sangwon2', email: 'clubwonni2@gmail.com'},
//     {name: 'Sangwon3', email: 'clubwonni3@gmail.com'},
//     {name: 'Sangwon4', email: 'clubwonni4@gmail.com'},
//     {name: 'Sangwon5', email: 'clubwonni5@gmail.com'},
//     {name: 'Sangwon6', email: 'clubwonni6@gmail.com'},
//     {name: 'Sangwon7', email: 'clubwonni7@gmail.com'},
//     {name: 'Sangwon8', email: 'clubwonni8@gmail.com'},
// ];

// toSave.map(obj => {
//   models.Profile.create(obj, (err, created) => {
//     console.log('Created?', created);
//   });
// });

// Basic API Methods


// Find Methods
var filter = {
    where: { //kind of MySql WHere Clause
        name: { like: 'Sangwon' },
    },
    order: 'id ASC', //Order by: "field direction"
    limit: 10,
    skip: 4,
    fields: {
        email: true
    }
    // include: {
    //     relation: 'Post',
    //     scope: {
    //         limit: 5,
    //         order: 'date DESC',
    //         include: {
    //             relation: 'Image',
    //             limit: 1,
    //             where: {type: 'thumbnail'}
    //         }
    //     }
    // }
};

// models.Profile.findOne({where: {name: 'Sangwon'}, order: 'Id DESC'}, (err, found) => {
//     console.log("Found", err, found);
// });

// models.Profile.find({order: 'Id ASC'}, (err, found) => {
//     console.log("Found", err, found);
// });

// models.Profile.find(filter, (err, found) => {
//     console.log("Found", err, found);
// });

//Delete Methods
// models.Profile.findById("5ede794f00e3ff4d1847ce0c", (err, found) => {
//     console.log("Found", err, found);
//     found.destroy(); //destroy() delete an object with Id avoce
// });

// models.Profile.destroyAll(filter.where, (err, found) => {
//     console.log("Found", err, found);
// });

// models.Profile.findById("5ede794f00e3ff4d1847ce0c", {include: 'Posts'}, (err, found) => {
//     console.log("Found", err, found);
//     found.Posts.destroyAll({date: {lte: new Date('2019-02-04')}});
// });




// Create Methods
// models.Profile.create({name: 'Sangwon'}, (err, profile) => {
//   console.log('data?', err, profile);
// });

//Upsert Methods
// if there is same id existing, it modifies any data with the id, otherwise, It will create new instance
// models.Profile.upsert({ id: '5edea946f962a00aace64954', name: 'Sangwon1' }, (err, profile) => {
//     console.log('data?', err, profile);
// });

//if found, shows existing data, otherwise, create one
// models.Profile.findOrCreate({name: 'Sangwon2' }, (err, profile) => {
//     console.log('data?', err, profile);
// });

//Update Methods
// models.Profile.findOrCreate({name: 'Sangwon2' }, (err, profile) => {
//    if(err){
//        console.log("there was an error", err)
//    }else if(profile){
//        profile.updateAttributes({
//         email: 'Sangwon@gmail.com'
//        }, (updatedError, updated) => {
//            console.log('saved?', updatedError, updated)
//        });
//    }
// });

// models.Profile.findOrCreate({name: 'Sangwon2' }, (err, profile) => {
//     if(err){
//         console.log("there was an error", err)
//     }else if(profile){
//         profile.email='Sangwon@gmail.com';
//         profile.save((err,updated) => {
//             console.log('updated?',err, updated)
//         });
//     }
//  });