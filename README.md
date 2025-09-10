
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

4.3:Nested Destructuring<br>

4.4:Mixed Destructuring<br>
Example:<br>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>create and insert element</title>
</head>
<body>
    <div id="container">
        <p>first element</p>
    </div><br>
    <script>
        //create
        const newp=document.createElement("p");
        newp.textContent="second element";
        //insert
        document.getElementById("container").appendChild(newp);
    </script>
</body>
</html>

```
---