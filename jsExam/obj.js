var programmer = {
	fullname : 'akeanrin komkoon' ,
	age : 18,
	skills :['html','css'],
	showData : function() {
		return 'My name is ' + this.fullname
	}
}

// console.log(programmer.fullname);21.';/2;l'

programmer.fullname = 'john';

programmer.skills.push('php');


for (var i in programmer) {
	console.log(i + "\t" + programmer[i]); 
}
