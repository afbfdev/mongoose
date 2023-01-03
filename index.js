// getting-started.js
const mongoose = require('mongoose');
const Person = require('./person');
(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/test");
        console.log("Connexion réussi avec la base de donnée");
//Create and Save a Record of a Model
       /* const person = new Person(
            {
                name: "fall",
                age: 28,
                favoriteFoods: ['apple', 'banana'] 
            }
        );
        const result = await person.save()
        console.log(result) */

//Create Many Records with model.create():
        
/*const result = await Person.create(
    {
        name: "fall",
        age: 28,
        favoriteFoods: ['apple', 'banana'] 
    },
    {
        name: "keita",
        age: 33,
        favoriteFoods: ['pineapple', 'banana'] 
    },
    {
        name: "dieye",
        age: 36,
        favoriteFoods: ['watermelon', 'banana'] 
    }
        console.log(result) */

/*const result = await Person.find({})
            console.log(result) */

/*const result = await Person.findOne({favoriteFoods: 'watermelon'})
            console.log(result) */

const result = await Person.findById(id).exec();
            console.log(result)


} catch (error) {
        console.log(error.message);
    }
}) ();