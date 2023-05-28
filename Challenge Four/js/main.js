const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

/*   let filterInventors = inventors.filter(e => e.year >= 1500 && e.year < 1600);

console.log(filterInventors.sort((a,b) => b.year - a.year));

console.log(inventors.sort((a,b) => a.year - b.year)); */

function bornIn(obj, decade){
    let filteredObj = obj.filter(e => e.year >= decade && e.year < (decade + 100));

    return filteredObj.sort((a,b) => a.year - b.year);

}

/* 1 */
console.log("q1");
console.log(bornIn(inventors, 1500));



let nameArr = inventors.map(e => (e.last + ", " + e.first));

/* 2 */
console.log("q2");
console.log(nameArr.sort());

/* 3 */
console.log("q3");
console.log(inventors.sort((a,b) => a.year - b.year));

/* 4 */

let all = inventors.reduce(((a,b) => a + (b.passed - b.year)), 0);
console.log("q4");
console.log(all);

/* 5 */
console.log("q5");
console.log(inventors.sort((a,b) => (a.passed - a.year) - (b.passed - b.year)));

/* 7 */
let sortPeople = people.sort();
console.log("q7");
console.log(sortPeople);



/* 8 */
 const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

let dataInst = {};
for (let i = 0; i < data.length; i++){
    if(dataInst[data[i]]){
        dataInst[data[i]] ++;
    }else{
        dataInst[data[i]] = 1;
    }
}
console.log("q8");
console.log(dataInst);

