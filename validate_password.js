function passwordIsValid(password){
    if (/[0-9a-zA-Z\s]/g.test(password) == false){
        throw new Error("password should exist")
    }
    if (/.{9,}/.test(password) == false){
        throw new Error("password should be longer than 8 characters")
    }
    if (/[a-z]/.test(password) == false){
        throw new Error("password should have at least one lowercase letter")
    }
    if (/[A-Z]/.test(password) == false){
        throw new Error("password should have at least one uppercase letter")
    } 
    if (/[0-9]/.test(password) == false){
        throw new Error("password should have at least one digit")
    }
    if (/[^0-9a-zA-Z\s]/g.test(password) == false){
        throw new Error("password should have at least one special character")
    }
}

function passwordIsOkay(password) {
    const len = /.{9,}/;
    const lowercase = /[a-z]/g;
    const uppercase = /[A-Z]/g;
    const digit = /[0-9]/g;
    const specialChar = /\W/g;
    let conditionMet = 0;
  
    if(password != ""){
      conditionMet += 1;
    }
  
    if (password.match(len)) {
      conditionMet += 1;
    }
    if (password.match(lowercase)) {
      conditionMet += 1;
    }
    if (password.match(uppercase)) {
      conditionMet += 1;
    }
    if (password.match(digit)) {
      conditionMet += 1;
    }
    if (password.match(specialChar)) {
      conditionMet += 1;
    }
    if (conditionMet < 3 || !password.match(len)) {
      return false;
    }
    else{
    return true;
    }
  }
module.exports = {passwordIsValid, passwordIsOkay}