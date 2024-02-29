// singleton
//object literals
//object.create

const mySym = Symbol("key1")
const JsUser = {
    name: "Deepak",
    age: 18,
    [mySym]: "deepakbmwm3",
    location: "Jaipur",
    email: "dkuncool",
    isLoggedIn: false,
    lastLoginDay: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
JsUser.email= "dkcool"
//Object.freeze(JsUser)
JsUser.email = "dkverycool"
console.log(JsUser);

JsUser.greeting = function(){
console.log("Hello Js User");
}
JsUser.greetingTwo = function(){
console.log(`Hello Js User,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



