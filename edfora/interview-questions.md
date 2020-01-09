---
title : Interview Questions
description : Tech interview questions
tags : []
---

# Interview Questions

[[toc]]

### Tech-Question-1
Write a function to recursively read a directory and print the list of all the files as an array.
e.g.
```
.
├─ folder-1
|    ├─ file-1
|    └─ folder-1.1
|        └─ file-2
├─ folder-2
|    ├─ file-3
|    └─ file-4
└─ file-5

result : ['file-1', 'file-2', 'file-3', 'file-4', 'file-5']
```


Function signature:
```js
import * as fs from 'fs';
import * as path from 'path';
function recursiveReadDir(dirPath : string) : string[] {
    //...your code goes here
}
```

### Tech-Question-2
How to create a simple server in Node js that returns Hello World ?

### Tech-Question-3
```js
const arr = [10, 12, 15, 21]
for (var i = 0;i < arr.length;i++) {
    setTimeout(function(){
        console.log(`Index: ${i}, element: ${arr[i]}`);
    }, 3000);
}
```

### Tech-Question-4
Write a function to reverse a String without using any pre-defined functions.
```js
function reverseString(text : string) : string {
    //...your code goes here
}
```

### Tech-Question-5
Count the number of appearances of letters in a string, and print the result as explained in the examples below.
```js
/** Example 1:
* AABBCCDD
* A2B2C2D2
*/

/** Example 2:
* AEDCCC
* A1E1D1C3
*/

function countLetters(text : string) : string {
    //...your code goes here
}
```


### Concept Questions
1. What are modules in JavaScript?
2. What are commonjs modules?
3. What is the difference between various module definitions e.g AMD/ requirejs/ UMD modules e.t.c
4. How Node.js resolves modules
5. Explain the difference between readFile and createReadStream in Node js ?
6. List types of Http requests?
7. What is hoisting in JavaScript?
8. What is lazy loading, in general?
9. Build systems/ webpack e.t.c
10. What are micro-services?
11. Prototypal inheritance
12. React hooks

add firebase qquestions
aws lambda
serverless
