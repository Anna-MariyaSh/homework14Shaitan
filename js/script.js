let string = prompt("put your string");
let number = +prompt("put your number");
let symbal = prompt("put your symbol");
let bullin = prompt("true or false");
function padString(str, num, smb, bull) {

 if (isNaN(num)) {
   return alert("error in your length");

 } else if (smb === null) {
   return alert("error in your symbol");

 } else if (bull !== "true" && bull !== "false") {
   return alert("error in plase your symbal");

 } else if (str === null) {
   return alert("error in your string");

 } else if(bull === "true" && str.length <= num) {
   return console.log(str + smb.repeat(num - str.length));

 } else if (bull === "false" && str.length <= num) {
    return console.log(smb.repeat(num - str.length) +str);

 } else if(str.length >= num) {
   return console.log(str.substr(0,num));

 }

}
padString(string, number, symbal, bullin);
