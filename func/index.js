function user_duplicate(message) {
  this.message = (message || "");
}

function ValidationError(message){
  this.message = (message || "");
}

user_duplicate.prototype = new Error();
ValidationError.prototype = new Error();

global.user_duplicate = user_duplicate;
global.ValidationError = ValidationError;

global.check_param = (req_param, params) =>{
  return params.every(str => req_param[str] != undefined && req_param[str] != null && req_param[str].length > 0);
}
