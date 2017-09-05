function test(x, y) {
    return x * y;
}

var person = {
    firstname: "shadii",
    lastname: "nourriz",
    age: 20,
    haircolor: "brown"
};

console.log(person.firstname);
console.info(person.age + " or " + test(10, 2));
console.warn(person.firstname + person.lastname + " is " + person.age + " years old");
console.error("error");
