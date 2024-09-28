**1.What was the bug?**
The bug was that the num1 and num2 were being treated as string and their addition was being treated as string cocatenation. 

**2.How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use)**
The bug could be fixed by parsing num1 and num2 as int like the following code snippet:
let result = parseInt(num1) + parseInt(num2)