var name = process.argv[1];
var nameBis = process.argv[2];
console.log(name);
console.log(nameBis);

var fs = require('fs');
if(name){
	fs.writeFileSync(name,'Your file');
}