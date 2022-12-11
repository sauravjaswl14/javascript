//This is a reference to an object, and that object represents the
//current execution scope

// const person = {
//     first : "Cherilyn",
//     last : "Sarkisian",
//     nickname : "Cher",
//     fullName(){
//         console.log(`${this.first} ${this.last} AKA ${this.nickname} `)
//     }
// }

const person = {
  first: "Cherilyn",
  last: "Sarkisian",
  nickname: "Cher",
  fullName() {
    const { first, last, nickname } = this;
    return `${first} ${last} AKA ${nickname}`;
  },
  printBio() {
    const fullname = this.fullName();
    console.log(`${fullname} is a person`);
  },
};

//Anoyer Function

// ["literally","cray cray","I can't even","Totes!","YOLO","Can't Stop, Won't Stop"]

const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop",
  ],
  pickPhrase() {
    const { phrases } = this;
    let idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase()); //here the value of this is parent object as we have used arrow function inside the method of parent object
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
  },
};

/*
     const timerId = setInterval(() => {
            this.pickPhrase()
        }, 3000);

*/
