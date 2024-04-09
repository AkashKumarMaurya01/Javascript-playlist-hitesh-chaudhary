const accountid = 1323
let accoutemail= "akashmaurya09994@gmail.com"
var accountpassword = "1243321"
accountcity = "Goa"
let accountstate;

accoutemail ="maurya@gmail.com"
accountcity = "bengal"
accountpassword ="234"




// accountid = 234  this is constant variable and it is not allowed
console.log(accountid);
// now we are going to use console table log 

console.table([accountid , accountpassword , accoutemail, accountcity , accountstate] )

// it will look like it after printing in console log output

// ┌─────────┬────────────────────┐
// │ (index) │ Values             │
// ├─────────┼────────────────────┤
// │ 0       │ 1323               │
// │ 1       │ '234'              │
// │ 2       │ 'maurya@gmail.com' │
// │ 3       │ 'bengal'           │
// │ 4       │ undefined          │
// └─────────┴────────────────────┘

