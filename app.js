
// first 
let number = 0;
for (let i = 1; i <= 10; i++) {
    document.getElementById("first").innerHTML = `<p>1. the sum of numbers from 1 to ${i}: ${number += i}</p>`
}
console.log(number);

// second 
let a = "";
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        a = a + i + ",";
        console.log(a);
        document.getElementById("second").innerHTML = `<p>2. even numbers between 1 and ${i}:${a}</p>`
    }
}

// third
let b = "";
for (let i = 10; i >= 1; i--) {
    b = b + i + ","
    console.log(b);
    document.getElementById("third").innerHTML = `<p>3. numbers from 10 to 1 in reverse order: ${b}</p>`
}

// fourth 
let num = 9;
let c = "";
for (let i = 1; i <= 10; i++) {
    c = c + `${num} x ${i} = ${num * i}` + "<br>"
    console.log(`${num} x ${i} = ${num * i}`);
    document.getElementById("four").innerHTML = `<p>4. multiplication table: table of: ${num} <br> ${c}</p>`
}
