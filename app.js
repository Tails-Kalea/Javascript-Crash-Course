let users = [
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

let newUser = { 
    username:username,
    email:email,
    password:password,
    subscriptionStatus:subscriptionStatus,
    discordId:discordId,
    lessonsCompleted:lessonsCompleted, 
}

function register(users) {
    users.push(newUser)
}

register({ 
    username:"Zen",
    email:"zen@frontendsimplified",
    password:"zen123",
    subscriptionStatus:"VIP",
    discordId:"Zen#002",
    lessonsCompleted:3
})
console.log(users)
