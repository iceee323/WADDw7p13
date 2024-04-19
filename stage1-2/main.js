// const asides = document.getElementsByTagName('aside');
// let text = "Hello, World!";
// for (let asides of aside) {
//     text;
// }
const x = document.getElementsByTagName('aside');
const y = x[0].getElementsByTagName('p');
y[0].innerHTML = "Hello world!";

let lis = document.getElementsByTagName('li');
let newLis = Array.prototype.slice.call(lis);
newLis.forEach((child) => { /* Do something; */ 
    let a = document.createElement("a");
    a.href = "www.google.com";
    a.innerText = child.innerText;
    child.innerText = "";
    child.appendChild(a);
});
