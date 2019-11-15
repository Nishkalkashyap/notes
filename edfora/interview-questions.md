### Tech-Question-1
Write a function to recursively read a directory and print the list of all the files as an array.
e.g.
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


Function signature:
```js
import * as fs from 'fs';
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
    });
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



