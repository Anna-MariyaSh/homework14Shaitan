function padString(str, num, smb, bull = true) {

 if (typeof num !== "number" && isNaN(num)) return alert("error in your length");

  if (typeof smb !== "string" && smb.length !== 1) return alert("error in your symbol");

  if (typeof bull !== "boolean") return alert("error in plase your symbal");

  if (typeof str !== "string") return alert("error in your string");

  if(str.length >= num) return str.substring(0, num);

  for(let i = str.length; i <= num; i++) {
    if(bull) {
      str += smb;
    } else {
      str = smb + str;
    }
  }
 return str;
}
console.log(padString("hgh", 9, "c", false));
