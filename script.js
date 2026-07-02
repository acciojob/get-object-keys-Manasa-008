//your JS code here. If required.
const student={
	name:"Manasa",
	age:18,
	city:"kurnool",
};

function getKeys(obj){
	return Object.keys(obj.name);
}
console.log(getKeys(student));