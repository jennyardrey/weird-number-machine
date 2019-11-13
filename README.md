##Weird Number Machine

I am building a program that will find if a number is 'weird'. In number theory, a number is weird when all of its proper divisors (including 1 but not itself) add up to more than the number itself, **AND** no subset of the numbers add up to the number exactly. This is known as being abundent but not semiperfect.

An example of a weird number is 70: it's proper divisors are 1, 2, 5, 7, 10, 14 and 35 which add up to 74. No subset of these numbers add up to 70 exactly.
On the other hand, 12 is abundant (the sum of its proper divisors add up to greater than the number itself) however in this case, 2, 4 and 6 add up to 12 so it is not Weird.

When i have finished the user will be able to use the Weird Number Machine via a web app.

To-do:
- write a function to create array of proper divisors of any given number - completed
- write a function to add up numbers in an array and compare the sum to a given number to see if it is greater - completed
- write a function to see if any combination of the array can add up exactly to the number - completed
- Combine my functions to create a program that takes one number and returns a boolean depending on if it is weird - completed
- make a front end UI that would allow someone to input a number and get a result
