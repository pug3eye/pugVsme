// Normal Fucntion
function showData() {
	document.write('JavaScript <br>');
}

showData();



// Function Expression
var showName = function() {
	document.write('tinnarat');
}

showName();

var calculate = function(param1, param2) {
	return param1 * param2;
}

console.log(calculate(10, 2));

calculate = 100;
console.log(calculate);

function sayHi() {
	console.log("Bye");
}

function sayHoo() {
	console.log("Hoooo");
}

function say(func) {
	func();

}

	say(sayHi);	
    say(sayHoo);	



function sayy(func){
	console.log("Say...");	
	function sayyHii() {
		console.log("Hi!!!");	
	}
	return sayyHii;
}

var hii = sayy();	
hii(); 

