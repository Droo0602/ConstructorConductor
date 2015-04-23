//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name,age){
	this.name = name;
	this.age = age;
}

//Now create three instances of Person with data you make up

  //code here
var me = new Person('Andrew', 28);
var person1 = new Person('Bob', 32);
var person2 = new Person('Steve', 14);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

Person.prototype.sayName = function(){
	console.log(this.name)
}
