const convert = (str) => {
    let temp = "";
    for(let i=0;i<str.length;i++){
        temp = temp + String.fromCharCode(str.charCodeAt(i)-32);
    }
    return temp;
}
const str = "small";
console.log(convert(str));