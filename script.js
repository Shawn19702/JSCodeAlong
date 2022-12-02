// var username = "shawn";

// if(username == "shawn"){
//     console.log(true);
// }else{
//     console.log(false);
// }

// // Assignment of various variables
// var name = "Shawn";
// var pets = 300;
// var favoriterappers = [ "Lauryn Hill", "Kanye West", "Mike Jones" ];
// var songs = { LaurynHill: "Lost Ones", MikeJones: "Who??" }; 
// var corret = true;
// var empty = null;

// console.log(favoriterappers);

// var MikeJones = "MikeJoes"

// MikeJones = "Who??"


// console.log(MikeJones);

// var dog = "Bob";

// function animals(){
// var dog = "woof";
// console.log(dog);
// }

// console.log(dog);
// animals();
// console.log(dog);

// var number1 = 10;  // global scope

// function calc(){
//     return number1;
// }

// console.log(number1);


// function calc(){
//     let number = 10; // local scope
//     return number;
// }

// // console.log(number); // refrence error
//                     // cant find variable in scope

// function start(){
//     for (let i =0; i < 5; i++){
//         console(i); 
// }

// // console.log(i); // refrence error
// // cant find variable in scope
// }

// var ani = "elephant";

// var ani = "tiger";

// console.log(ani);

// console.log(ani);

// // gets latest one not both



// // console.log(a);

// // var a = 5;  // undefined 




// // console.log(x);

// // x = 100; // refrence error 

// var x = 100;

// function calculator() {
//   if (false) {
//     var x = 150;
//     // shouldn't change value
//     //  value unreachable in scope
//   }
//   console.log(x);
// }

// calculator();


// let y = Boolean;

// function equals() {
//   if (3 === "4") {
//     let y = true;
//     console.log(y);
//   }else {
//     let y = false;
//     console.log(y);
//   }
//   // not same type so false
// }
// equals();

// var x = 1;
// var x = 2;

// // vars can be reclared

// console.log(x);

// // let y = 1;
// // let y = 2;

// // console.log(y);

// // let cant be re declared

// // const animal = "dog"; 

// // SPECIES = "cat";

// // console.log(SPECIES);

// // cant be resigned

// // const TODO;

// // console.log(TODO);

// // const must be inlined 

// const Basketball = {
// 	color: "orange",
// 	price: 15
// }

// // Modify a property of Basketball
// Basketball.price = 15;

// console.log(Basketball);

// // const Object = new Object();

// // Initialize gimli object
// const gimli = {
// 	name: "Gimli",
// 	race: "dwarf",
// 	weapon: "axe",
// 	greet: function() {
// 		return `Hi, my name is ${this.name}!`;
// 	}
// };

// console.log(gimli.greet());


// console.log(gimli)


// console.log(gimli.weapon);

// console.log(gimli["weapon"]);

// console.log(gimli.greet);

// gimli["age"] = 139;

// console.log(gimli.age);

// gimli.fight = function() {
// 	return `Gimli attacks with an ${this.weapon}.`;
// }

// console.log(gimli.fight());

// gimli.weapon = "battle axe";

// console.log(gimli.weapon);

// console.log(delete gimli.weapon);

// console.log(gimli);


// const gimlil = {
// 	name: "Gimli",
// 	race: "dwarf",
// 	weapon: "battle axe",
// };

// for (let key in gimlil) {
//     console.log(gimlil[key]);
//   }


// for (let key in gimlil) {
//     console.log(key.toUpperCase() + ':', gimlil[key]);
//   }


// console.log(Object.keys(gimlil));

// const animal1 = "Dog";
// const animal2 = "Pig";
// const animal3 = "Cat";
// const animal4 = "Rhino";
// const animal5 = "Giarrafe";

// let animal = [
// 	"Dog",
// 	"Pig",
// 	"Cat",
// 	"Rhino",
// 	"Giarrafe",
// ];

// console.log(animal[0])


// // Initialize array of shark species with array literal
// // Initialize array of shark species with array literal
// const cars = ["Saab", "Volvo", "BMW"];
// let car = cars[0];

// console.log(car);

// // Initialize array of shark species with array constructor
// let color = new Array(
// 	"red",
// 	" White",
// 	"brown",
// );

// console.log(color);

// // Initialize array of mixed datatypes
// let datatypes = [
// 	"B",
// 	null,
// 	7,
// 	[
// 		"Shawn",
// 		"B",
// 	],
// ];

// console.log(datatypes);

// let Creatures = [
// 	"Spider",
// 	"Tiger",
// 	"Snake",
// 	"Rhino",
// 	"Elephant",
// ];

// console.log(Creatures);

// console.log(Creatures.length);

// console.log(Creatures.indexOf("Tiger"));


// console.log(Creatures.indexOf("Giarrafe"));

// console.log(Creatures[1]);


// const SecondtoLastIndex = Creatures.length - 2;

// Creatures[SecondtoLastIndex];

// console.log(Creatures[20]);

// let nestedArray = [
// 	[
// 		"Blue",
// 		"Red",
// 	],
// 	[
// 		"Purple",
// 		"Green",
// 	]
// ];

// console.log(nestedArray[0][0]);

// Creatures[5] = "whale";

// console.log(Creatures);

// Creatures[7] = "Fish";

// console.log(Creatures);

// console.log(Creatures[6]);

// // Append lobster to the end of the seaCreatures array
// Creatures.push("Hamster");

// console.log(Creatures);


// // Append dragonfish to the beginning of the seaCreatures array
// Creatures.unshift("Rabbit");

// console.log(Creatures);

// Creatures.splice(7, 1);

// console.log(Creatures);

// let firstArray = Creatures.slice(0, 6);
// let secondArray = Creatures.slice(7, 9); 

// firstArray.concat(secondArray);

// console.log(Creatures);

// // Remove the last item from the seaCreatures array

// console.log(Creatures.pop);

// console.log(Creatures.shift);


// // Assign manatee to the first item in the seaCreatures array
// Creatures[0] = "zebra";

// console.log(Creatures);


// // Replace seahorse with sea lion using splice method
// Creatures.splice(3, 1, "lion");


// console.log(Creatures);


// let colors = [
// 	"blue",
// 	"red",
// 	"brown",
// 	"yellow",
// ];

// for (let i = 0; i < colors.length; i++) {
//   console.log(i, colors[i]);
// }


// Create an array of aquatic mammals
// let vehicles = [
// 	"benz",
// 	"nissan",
// 	"toyota",
// ];

// // Loop through each mammal
// for (let vehicle of vehicles) {
// 	console.log(vehicle);
// }

// // Initialize a for statement with 5 iterations
// for (let i = 0; i< 5; i++) {
// 	// Print each iteration to the console
// 	console.log(i);
// }

// // Set initial variable to 0
// let i = 2;

// // Manually increment variable by 1 four times
// console.log(i++);
// console.log(i++);
// console.log(i++);
// console.log(i++);

// //Initialize a for statement with 5 iterations
// for (let i = 0; i < 4; i++) {
// 	console.log(i);
// }

// // Declare variable outside the loop
// let b = 3;

// // Initialize the loop
// for (; b < 4; b++) {
// 	console.log(b);
// }

// // Declare variable outside the loop
// let h = 0;

// // Omit initialization and condition
// for (; ; h++) {
// 	if (h > 3) {
// 		break;
// 	}
// 	console.log(h);
// }

// // Declare variable outside the loop
// let t = 2;

// // Omit initialization and condition
// for (; ; t++) {
// 	if (t > 3) {
// 		break;
// 	}
// 	console.log(t);
// }

// // Declare variable outside the loop
// let r = 8;

// // Omit all statements
// for (; ;) {
// 	if (r > 10) {
// 		break;
// 	}
// 	console.log(r);
// 	r++;
// }

// // Initialize empty array
// let array = [];

// // Initialize loop to run 3 times
// for (let i = 0; i < 3; i++) {
// 	// Update array with variable value
// 	array.push(i);
// 	console.log(array);
// }

// // Declare array with 3 items
// let food = [ "chicken", "salmon", "corn" ];

// // Initalize for loop to run for the total length of an array
// for (let i = 0; i < food.length; i++) {
// 	// Print each item to the console
// 	console.log(food[i]);
// }

// const things = {
// 	animals: "elephant",
// 	color: "gray",
// 	weight: Infinity
// }

// // Print property names of object
// for (a in things) {
// 	console.log(a);
// }

// // Print property values of object
// for (a in things) {
// 	console.log(things[a]);
// }

// // Print names and values of object properties
// for (a in things) {
// 	console.log(`${a}`.toUpperCase() + `: ${things[a]}`);
// }


// // Initialize array of shark species
// let cats = [ "lion", "tiger", "cheetah" ];

// // Print out each type of shark
// for (let cat of cats) {
// 	console.log(cat);
// }

// // Loop through both index and element
// for (let [index, cat] of cats.entries()) {
// 	console.log(index, cat);
// }

// // Assign string to a variable
// let String = "Shawn";

// // Iterate through each index in the string
// for (let a of String) {
// 	console.log(a);
// }


// // Initialize greeting function
// function myname() {
// 	console.log("Shawn");
// }

// myname();


// function add(x, y) {
// 	return x + y;
// }

// add(5, 5);

// const sum = function add(x, y) {
// 	return x + y;
// }

// // Invoke function to find the sum
// sum(20, 5);


// const multiply = (x, y) => {
// 	return x * y;
// }

// // Invoke function to find product
// multiply(30, 4);

// // Define square function
// const square = x => {
// 	return x * x;
// }

// // Invoke function to find product
// square(8);

// // Define square function
// const exponet = x => x * x;

// // Invoke function to find product
// exponet(10);


// const h = function() {}

// const c = class {}

// console.log(Object.getPrototypeOf(h));
// console.log(Object.getPrototypeOf(c));

// const w = function() {}

// // Initialize a constructor from a function
// const constructorFromFunction = new w();

// console.log(constructorFromFunction);

// const p = class {}

// // Initialize a constructor from a class
// const constructorFromClass = new p();

// console.log(constructorFromClass);


// function Hero(name, level) {
// 	this.name = name;
// 	this.level = level;
// }
// function Mage(name, level, spell) {
// 	// Chain constructor with call
// 	Hero.call(this, name, level);

// 	this.spell = spell;
// }


// class Heroo {
// 	constructor(name, level) {
// 		this.name = name;
// 		this.level = level;
// 	}

// 	// Adding a method to the constructor
// 	introduction() {
// 		return `${this.name} says hello.`;
//     }
// }


// const hero1 = new Hero('Varg', 1);
// console.log(hero1);

// // Creating a new constructor from the parent
// function Mage(name, level, spell) {
// 	// Chain constructor with call
// 	Hero.call(this, name, level);

// 	this.spell = spell;
    
// }
// const hero2 = new Mage('Lejon', 2, 'Magic Missile');
// console.log(hero2);

// // Creating a new class from the parent
// class Mager extends Heroo {
// 	constructor(name, level, spell) {
// 		// Chain constructor with super
// 		super(name, level);

// 		// Add a new property
// 		this.spell = spell;
// 	}
// }

// // Initialize an object with properties and methods
// const job = {
//     position: 'cashier',
//     type: 'hourly',
//     isAvailable: true,
//     showDetails() {
//         const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

//         console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
//     }
// };

// // Use Object.create to pass properties
// const barista = Object.create(job);

// barista.position = "barista";
// barista.showDetails();


// // / Initialize an object
// const employees = {
// 	boss: 'Michael',
// 	secretary: 'Pam',
// 	sales: 'Jim',
// 	accountant: 'Oscar'
// };

// // Get the keys of the object
// const keys = Object.keys(employees);

// console.log(keys);

// // Iterate through the keys
// Object.keys(employees).forEach(key => {
//     let value = employees[key];

// 	 console.log(`${key}: ${value}`);
// });

// // Get the length of the keys
// // const length = Object.keys(employees).length;

// // console.log(length);


// //Object.values()
// // Initialize an object
// const session = {
//     id: 1,
//     time: `26-July-2018`,
//     device: 'mobile',
//     browser: 'Chrome'
// };

// // Get all values of the object
// const values = Object.values(session);

// console.log(values);

// //Object.entries()
// // Initialize an object
// const operatingSystem = {
//     name: 'Ubuntu',
//     version: 18.04,
//     license: 'Open Source'
// };

// const entries = Object.entries(operatingSystem);

// console.log(entries);

// // Loop through the results
// entries.forEach(entry => {
//     let key = entry[0];
//     let value = entry[1];

//     console.log(`${key}: ${value}`);
// });

// // Initialize an object
// const fullName = {
//     firstName: 'Philip',
//     lastName: 'Fry'
// };

// // Initialize another object
// const details = {
//     job: 'Delivery Boy',
//     employer: 'Planet Express'
// };

// // Merge the objects
// const character = Object.assign(fullName, details);

// console.log(character);

// // Initialize an object
// const user = {
// 	username: 'saadisha',
// 	password: 'masoody'
// };

// // Freeze the object
// const newUser = Object.freeze(user);

// newUser.password = '*******';
// newUser.active = true;

// console.log(newUser);

// // Initialize an object
// const user2 = {
// 	username: 'AzureDiamond',
// 	password: 'hunter2'
// };

// // Seal the object
// const newUser2 = Object.seal(user2);

// newUser2.password = '*******';
// newUser2.active = true;

// console.log(newUser2);


// const workers = ['Ron', 'April', 'Andy', 'Leslie'];

// console.log(Object.getPrototypeOf(workers));

// console.log(Object.getPrototypeOf(workers) === Array.prototype);


// const note = {
//     id: 1,
//     title: 'My first note',
//     date: '01/01/1970',
//   }



// // Destructure properties into variables
// const { id: booty, title, date } = note

// console.log(booty)
// console.log(title)
// console.log(date)


// // Assign a custom name to a destructured value
// //const { id: noteId, title, date } = note

// const noteWithAuthor = {
//     id: 1,
//     title: 'My first note',
//     date: '01/01/1970',
//     author: {
//         nameFirst: 'John',
//         nameLast: 'Evans',
//     },
//   }


//   const {
//     author,
//     author: { nameFirst, nameLast },
//   } = noteWithAuthor
  
//   console.log(author);

//   const {length } = 'A string';

//   console.log(length);


//   const myDate = ['1970', '12', '01'];

function sum2(a, b) {
    return a + b
  }
  console.log(sum2)
  
  
  
  // const sums = function namedSumFunction(a, b) {
  //     if (!a || !b) throw new Error('Parameters are required.')
    
  //     return a + b
  //   }
    
  //   sums();
  
  const printNumbers = {
      phrase: 'The current value is:',
      numbers: [1, 2, 3, 4],
    
      loop() {
        this.numbers.forEach((number) => {
          console.log(this.phrase, number)
        })
      },
    }
    printNumbers.loop()
  
    function myFunction() {
      this.value = 5
    }
    
  
    const instance = new myFunction()
  
  console.log(instance.value)
  
  // const myArrowFunction = () => {}
  
  
  // const arrowInstance = new myArrowFunction()
  
  // console.log(arrowInstance)
  
  const sum5 = (a, b) => ({result: a + b})
  
  console.log(sum5(1, 2));
  
  // Define three example functions
  function first() {
      console.log(1)
    }
    
    function second() {
      console.log(2)
    }
    
    function third() {
      console.log(3)
    }
  
    // Execute the functions
  first()
  second()
  third()
  
  // Define three example functions, but one of them contains asynchronous code
  // function first() {
  //     console.log(1)
  //   }
    
  //   function second() {
  //     setTimeout(() => {
  //       console.log(2)
  //     }, 0)
  //   }
    
  //   function third() {
  //     console.log(3)
  //   }
  
  //   // Execute the functions
  // first()
  // second()
  // third()
  
  // A function
  function fn() {
      console.log('Just a function')
    }
    
    // A function that takes another function as an argument
    function higherOrderFunction(callback) {
      // When you call a function that is passed as an argument, it is referred to as a callback
      callback()
    }
    
    // Passing a function
    higherOrderFunction(fn)
  
  // Define three functions
  function first() {
      console.log(1)
    }
    
    function second(callback) {
      setTimeout(() => {
        console.log(2)
    
        // Execute the callback function
        callback()
      }, 0)
    }
    
    function third() {
      console.log(3)
    }
  
    first()
  second(third)
  
  
  
  function pyramidOfDoom() {
      setTimeout(() => {
        console.log(1)
        setTimeout(() => {
          console.log(2)
          setTimeout(() => {
            console.log(3)
          }, 500)
        }, 2000)
      }, 1000)
    }
  
    // Example asynchronous function
  function asynchronousRequest(args, callback) {
      // Throw an error if no arguments are passed
      if (!args) {
        return callback(new Error('Whoa! Something went wrong.'))
      } else {
        return setTimeout(
          // Just adding in a random number so it seems like the contrived asynchronous function
          // returned different data
          () => callback(null, {body: args + ' ' + Math.floor(Math.random() * 10)}),
          500,
        )
      }
    }
    
    // Nested asynchronous requests
    function callbackHell() {
      asynchronousRequest('First', function first(error, response) {
        if (error) {
          console.log(error)
          return
        }
        console.log(response.body)
        asynchronousRequest('Second', function second(error, response) {
          if (error) {
            console.log(error)
            return
          }
          console.log(response.body)
          asynchronousRequest(null, function third(error, response) {
            if (error) {
              console.log(error)
              return
            }
            console.log(response.body)
          })
        })
      })
    }
    
    // Execute 
    callbackHell()
  
    // Initialize a promise
    const promise = new Promise((resolve, reject) => {
      resolve('We did it!')
    })
    console.log(promise);
  
    promise.then((response) => {
      console.log(response)
    })
  
    const promise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve('Resolving an asynchronous request!'), 2000)
    })
    
    // Log the result
    promise2.then((response2) => {
      console.log(response2)
    })
  
    // Chain a promise
  promise2
  .then((firstResponse) => {
    // Return a new value for the next then
    return firstResponse + ' And chaining!'
  })
  .then((secondResponse) => {
    console.log(secondResponse)
  })
  
  
  function getUsers(onSuccess) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Handle resolve and reject in the asynchronous API
          if (onSuccess) {
            resolve([
              {id: 1, name: 'Bob'},
              {id: 2, name: 'Joe'},
              {id: 3, name: 'Billy'},
            ])
          } else {
            reject('Failed to fetch data!')
          }
        }, 1000)
      })
    }
  
    // Run the getUsers function with the false flag to trigger an error
  getUsers(true)
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.error(error)
  })
  
  getUsers();
  
  // Run the getUsers function with the true flag to resolve successfully
  getUsers(true)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.error(error)
    })
  
    // Fetch a user from the GitHub API
  fetch('https://api.github.com/users/octocat')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.error(error)
  })
  
  // Create an async function
  async function getUser2() {
      return {}
    }
  
    console.log(getUser2())
  
    getUser2().then((response) => console.log(response))
  
    // Handle fetch with async/await
  async function getUser2() {
      const response = await fetch('https://api.github.com/users/octocat')
      const data = await response.json()
    
      console.log(data)
    }
    
    // Execute async function
    getUser2()
  
    // Handling success and errors with async/await
  async function getUser2() {
      try {
        // Handle success in try
        const response = await fetch('https://api.github.com/users/octocat')
        const data = await response.json()
    
        console.log(data)
      } catch (error) {
        // Handle error in catch
        console.error(error)
      }
    }









