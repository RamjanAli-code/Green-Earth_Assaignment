
1.Answer:Difference between var, let, and const:<br>

1.1:var <br>


#Function -scoped and globally scoped <br>

#Redeclared in the same scope<br>

1.2:let <br>


#Block-scoped<br>

#Do not redeclared in the same scope<br>

1.3:const<br>


#Block-scoped<br>

#Do not redeclared in the same scope<br>

#Do not reassign<br>

---

2.Ans:difference between map(), forEach() and filter():<br>


2.1:map() <br>


#Creates a new array by applying a function to each element<br>

#Return a new array with transformed elements<br>

2.2:forEach() <br>


#Iterated over each element in the array and executes a function <br>

#Return nothing<br>

2.3:filter()<br>


#Creates a new array containing elements that pass a condition <br>
#Return a new array with filtered elements<br>

---

3.Answer:Arrow functions in ES6:<br>


Arrow function are a shorter,cleaner syntax for javaScript.Arrow function in ES6 <br> to make code more concise ,especially for callbacks and functional programming.<br>

Key feature arrow function in ES6:<br>

#Shorter syntax<br>

#Implicit Return<br>

#Use Lexical this<br>

#Do not used as constructor<br>

#No own arguments object<br>

---

4.Ans:Destructuring assignment work in ES6:<br>


Destructing assaignment is a feature in ES6 that properties from objects into separate variables in a neat way.<br>

4.1:Array Destructuring<br>

Example:<br>
```html
const num=[1,2,3];
const[a,b,c]=num;
console.log("Num is",a,b,c);

```

4.2:Object Destructuring<br>

Example:<br>
```html
const user={name:"Ramjan Ali", age:22};
const {name,age}=user;
console.log("Name and age is :",name,age);

```

4.3:Nested Destructuring<br>

Example:<br>
```html
const num=[1,[2,3],4];
const[a,[b,c],d]=num;
console.log("Num is",a,b,c,d);

```

4.4:Mixed Destructuring<br>

Example:<br>
```html
const user= [
{id:1,name:"Ramjan",age:25},
{id:2,name:"Ramjan khan",age:23}
];
const[
{name:firstUser,age:firstAge},
{name:secondUser,age:secondAge},
];
console.log(firstUser,firstAge);
console.log(secondUser,secondAge);
```

---

5.Answer:template literals in ES6 and its different from string concatenation:<br>

Template literals are strings enclosed in backticks.They allow easier interpolation of variables,<br>multiline string and embeded expression.<br>

5.1:String Concatenation<br>


#Using double quatation or single quatation <br>

#Multiline needs \n or +<br>

#Must concatenate manually<br>

#Less readable <br>

5.2:Template Literal <br>


#Using Backticks <br>

#Naturally supprted multiline<br>

#Can embeded any expreesion<br>

#Cleaner and easier to read<br>

---
