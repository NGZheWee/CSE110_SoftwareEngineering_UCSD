# Lab 8  
Name: NG Zhe Wee (Derrick)  
A screenshot of all your tests results from running `npm test`: ![](/Screenshot%20of%20All%20Tests%20Passed.png)    
  
## Check Your Understanding:
**1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.**  
**1. Within a Github action that runs whenever code is pushed**  
**2. Manually run them locally before pushing code**  
**3. Run them all after all development is completed**  
>In the devlepment pipeline of my Recipe project, I would decide to manually run the automated tests locally before pushing the code for the Recipe project. This is because running the automated tests locally before pushing not only gives me the opportunity to quickly fix any bugs before pushing them, but also allow me to change my test cases flexibly according to the local changes I make to my code.  
  
**2) Would you use an end to end test to check if a function is returning the correct output? (yes/no)**  
>  No, because End-to-End testing is ideal for testing the functionality of an application, rather than the data being sent to the user. Instead, Unit testing should be use because it efficiently checks for the functions or calculations that provide resulting data—a numerical value, a text string, etc.  
  
**3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.**  
> No, because unit testing is best for testing individual parts of code in encapsulated units to make sure each part of code is functioning as it should. Instead, End-to-end testing should be use because it could test all layers of the application at once in order to check for the entire workflow of the message feature.
  
**4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.**  
>Yes, because with unit test I can simply input a variety of messages into the function and compare each result against the expected outcome flexibly (whether it exceeds the max length of 80 characters or not) using the expect.toBe syntaxes (or anthing with the similar function).  