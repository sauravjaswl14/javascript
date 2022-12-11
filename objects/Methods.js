//We can add functions as properties on object , we call them Methods

const math = {
  numbers: [1, 2, 3, 4, 5, 6, 7],
  add: function (x, y) {
    return x + y;
  },
  multiply: function (x, y) {
    return x * y;
  },
};


//Method Shorthand

const auth = {
    username: "Tommybot2",
    login(){
        console.log("LOGGED YOU IN!!");
    },
    logout(){
        console.log("GOODBYE!")
    }
}