const { error } = require('console');
let mongoose = require('mongoose');

let peopleSchema = new mongoose.Schema({
    name: {type: String, require: true},
    age: Number,
    favoriteFoods: [String]
  })

  let Person = mongoose.model('Person', peopleSchema)

  let pipita = new Person({name: 'Pipita', age:27, favoriteFoods: ['pizza', 'chips']})
  console.log(pipita);

  var createAndSavePerson = function(done){
    let mami = new Person({name: 'Mami', age:22, favoriteFoods: ['tacos']})
    mami.save((error, data) =>{
        if (error) {
            console.log(error);
        }else{
            done(null, data)
        }
    })
  };
  createAndSavePerson();

  let arrayOfPeople = [
    {name: 'Mami', age:22, favoriteFoods: ['loiu']},
    {name: 'Papi', age:24, favoriteFoods: ['tur']},
    {name: 'Mimi', age:29, favoriteFoods: ['oti']}
  ];
    
var createManyPeople = function(arrayOfPeople, done){
    Person.create(arrayOfPeople, (error, createdPeople)=>{
        if (error) {
            console.log(error);
        }else{
            done(null, createdPeople)
        }
    });
};

Person.find({name: 'Mami'}, (error, data)=>{
    if (error) {
        console.log(error);
    }else{
        console.log(data);    
    }
})

var findOneByFood = function(food, done){
    Person.findOne({favoriteFoods: {$all: [food]}}, (error, result)=>{
        if (error) {
            console.log(error);
        }else{
            console.log(data);
        }
    })
};