const accountId = 5144815
let accountEmail = "demo@gmail.com"
var accountPassword = "12345678"
accountCity = "Delhi";
let accountState;

// accountId = 234  // Not Allowed

accountEmail = "test@yahoo.in"
accountPassword  = "2121121"
accountCity = "Pune"

console.log(accountId);

/* prefer not to use Var
Because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);