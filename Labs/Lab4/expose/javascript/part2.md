**1. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^**
3 because i is declared with the keyword var and i++ updates the value of i in the lexical environment.

**2. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^**
150 because discountedPrice is declared with the keyword var and in the last iteration of the for loop discountedPrice is 300*0.5 which is 150 and this value is updated in the lexical environment of the function.

**3. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^**
150 because in the last iteration of the for loop finalPrice is Math.round(300*0.5*100w)/100 hich is 150 and this value is updated in the lexical environment of the function. 

**4.^^^ What will this function return? Give a brief explanation why. If the code causes an error, explain why. ^^^**
[50,100,150] because each iteration of foor loop generates a new lexical envieonment, with its own variable i, so the discountedPrice and finalPrice references its own i, from that iteration, and each iteration pushes a different value to the array discounted.

**5. ^^^ What will happen at line 12 and why?  If the code causes an error, explain why. ^^^ (assume this function is being called like the others: discountPrices([100, 200, 300], 0.5)).**
the code causes an error because the variable i is declared with the let keyword which can only be used with the block of the for statement, but line 12 is outside of the block.

**6. ^^^ What will happen at line 13 and why? If the code causes an error, explain why. ^^^**
the code causes an error because the variable discountedPrice is declared with the let keyword which can only be used with the block of the for statement, but line 13 is outside of the block.

**7. ^^^ What will happen at line 14 and why? If the code causes an error, explain why. ^^^**
150 because the variable finalPrice is declared with the let keyword in the same scope as line 14 is and its value is updated to be 150 in the last iteration.

**8.^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^**
[50,100,150] because each iteration of foor loop generates a new lexical envieonment, with its own variable i, so the discountedPrice and finalPrice references its own i, from that iteration, and each iteration pushes its finalPrice to the array discounted.

**9. ^^^ What will happen at line 11 and why? If the code causes an error, explain why. ^^^**
the code causes an error because the variable i is declared with the let keyword which can only be used with the block of the for statement, but line 11 is outside of the block.

**10. ^^^ What will happen at line 12 and why? If the code causes an error, explain why. ^^^**
3 because the length is calculated to be the length of the array input, which is [100,200,300].

**11. ^^^ What will this function return? Give a brief explanation. If the code causes an error, explain why. ^^^**
[50,100,150] because each iteration of foor loop generates a new lexical envieonment, with its own variable i, so the discountedPrice references its own i, from that iteration, and each iteration pushes its discountedPrice to the array discounted.

**12. Given the above Object, write the notation for:  (These should be in your part2.md)**
    **A. Accessing the value of the name property in the student object**
    console.log(student.name);
    **Accessing the value of the Grad Year property in the student object**
    console.log(student['Grad Year']);
    **Calling the function for the greeting property in the student object**
    console.log(student.greeting());    
    **Accessing the name property of the object in the Favorite Teacher property in student**
    console.log(student['Favorite Teacher'].name);
    **Access index zero in the array of the courseLoad property of the student object**
    console.log(student.courseLoad[0]);

**13. Arithmetic**
    **A. ‘3’ + 2**
    32 because 2 is converted to string 
    **B. ‘3’ - 2**
    1 because 3 is converted to int
    **C. 3 + null**
    3 because null is converted to 0
    **D. ‘3’ + null**
    3null because they both are strings
    **E. true + 3**
    4 because true is converted to 1
    **F. false + null**
    0 because both converted to int
    **G. '3' + undefined**
    3undefined because undefined is converted to string
    **H. '3' - undefined**
    NaN because undefined is converted to NaN when converted

**14. Comparison**
    **A. ‘2’ > 1**
    true because 2 is converted to int
    **B. ‘2’ < ‘12’**
    false because both are strings
    **C. 2 == ‘2’**
    true because unstricted
    **D. 2 === ‘2’**
    false because strict
    **E. true == 2**
    false because true is 1
    **F. true === Boolean(2)**
    true because Boolen(2) is true 

**15. Explain the difference between the == and === operators.**
A strict equality operator === checks the equality without type conversion but === performs type conversion before equality check.

**16. Given the above Object, write a for...in loop that will iterate through it and print out the value of the property if the property starts with the letter r, or if the value of that property is an odd number.**
See part2-question16.js

**17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development.**
[2,4,6] because it is esentially equivalent to newArr.push(doSomething(array[i])) for each iteration.

**18. The above program only prints out the time once when executed. Modify this code such that the program prints out the time every second.**
See part2-question18.js

**19. What is the output of the above code? (This should be in your part2.md)**
1
4
3
2
