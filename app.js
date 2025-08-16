let users = [ // User Object turned into an Array
  {
   username: "Taillur McEachern",
    email: "tkmmceachern@outlook.com",
    password: "test123",
    discordId: "T.McEachern001",
    userSubscriptionStatus: "VIP",
    lessonsCompleted:  1,
  },
  {
    username: "James Clark",
    email: "james.clark@gmail.com",
    password: "peach123",
    discordId: "Jay.Clark001",
    userSubscriptionStatus: "VIP",
    lessonsCompleted: 9,
  },
];


function register(user) { //Creating Function , Expecting USER VALUES 
    users.push(user); //Pushes Users values to a new user Object line 
}

register({  //Calling Function to set new values for a new Users Object
    username:"Zen",
    email:"zen@frontendsimplified",
    password:"zen123",
    subscriptionStatus:"VIP",
    discordId:"Zen#002",
    lessonsCompleted:3
})
console.log(users)
