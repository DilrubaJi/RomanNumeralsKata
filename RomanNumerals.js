function intToRoman(roman) {
// undefined validation
let result = "";
roman === undefined ? result = "Number is required" : false;
// if roman is <= 3 then return same number of i's
if(roman <= 3){
    for(let i = 0; i < roman; i++){
    result = result + "i";
    }
// if 4 return iv
}else if(roman === 4){
    result = "iv";
};

return result;
};
module.exports = {
    intToRoman,
};