let number = Number(prompt("Please pick a number"));
if (!Number.isNaN(number)){ // in this line we are checking if Number is not equal to NaN and if the result is true then we proceed to do the action which is to print the multiplicayion of number times number to then show thhat number is the square root of that calculation
  console.log('your number is the square root of' +' '+ number*number)
} else ('can you please give me a number? :)'); // in case that Number is NaN we are gonna display this message to let now the user that he must write something a real number 
// this small program tell us a bit about some of the use of the if/else statement in JavaScript and also a way to prove that a given value by the user is actually a number 

let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName);

// printing out all even numbers from 0 to 12 with a function in JS
for (let number = 0; number <= 12; number = number + 2){
    console.log(number)
};

/*The parentheses after a for keyword must contain two semicolons. 
The part before the first semicolon initializes the loop, usually by defining a binding. 
The second part is the expression that checks whether the loop must continue. 
The final part updates the state of the loop after every iteration. In most cases, 
this is shorter and clearer than a while construct.*/

// a function that computes 2*10

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1){
    result = result * 2;
};
console.log(result)

/*Having the looping condition produce false is not the only way a loop can finish. 
There is a special statement called break that has the effect of immediately jumping out of the enclosing loop.

This program illustrates the break statement. 
It finds the first number that is both greater than or equal to 20 and divisible by 9.*/ 
for (let current = 20; ; current = current + 1) {
    if (current % 9 == 0) {
      console.log(current);
      break;
    }
  }

/*Binding names may not contain spaces, 
yet it is often helpful to use multiple words to clearly describe what the binding represents.
These are pretty much your choices for writing a binding name with several words in it:

fuzzylittleturtle
fuzzy_little_turtle
FuzzyLittleTurtle
fuzzyLittleTurtle

The first style can be hard to read. I rather like the look of the underscores, 
though that style is a little painful to type. The standard JavaScript functions, 
and most JavaScript programmers, follow the bottom style—they capitalize every word except the first. 
It is not hard to get used to little things like that, and code with mixed naming styles can be jarring to read, 
so we follow this convention.*/ 

let triangle = 1;
for (let line = 0; line <= 7; line = line + 1) {
    triangle = line * "#";
    console.log(triangle);
}

console.log(3 * "*")


let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1){
    result = result;
    console.log(result)
};
console.log(result)

let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
  console.log(total)
}
console.log(total);
