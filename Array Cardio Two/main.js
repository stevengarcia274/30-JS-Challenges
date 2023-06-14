const people = [
      { name: 'Wes', year: 1988 },
      { name: 'Kait', year: 1986 },
      { name: 'Irv', year: 1970 },
      { name: 'Lux', year: 2015 }
    ];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // Array.prototype.every() // is everyone 19 or older?


console.log(people.some(e => {return (2023 - e.year) > 19}));

/* console.log(people.some(ofAge)); */


function ofAge(born){
  let curDate = new Date();
  let curYear = curDate.getFullYear();

  return (curYear - born.year) > 19;
}

console.log(people.every(e => {return (2023 - e.year) > 19}));

console.log(comments.find(e => e.id == 823423));
    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    let t = comments.findIndex(e => e.id == 823423);
    console.log(comments);
    comments.splice(1, 1);

    console.log(comments);