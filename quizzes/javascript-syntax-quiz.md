Name the data type of this expression:
```javascript
{
   name: "Fred",
   age: 22
}
```
>
`Object` a.k.a. map a.k.a. dictionary

------------------------------------------------------
Name the data type of this expression: 
```javascript
"Hello world"
```
>
`String` a.k.a. text

------------------------------------------------------
Name the data type of this expression:
```javascript
22
```
>
`Number` a.k.a. integer

------------------------------------------------------
Name the data type of this expression:
```javascript
3 < x
```
>
`Boolean` a.k.a. true/false

------------------------------------------------------
Name the data type of this expression:
```javascript
10.25
```
>
`Number` a.k.a. float

------------------------------------------------------
Name the data type of this expression:
```javascript
[23, 2349, x]
```
>
`Array` a.k.a. list

------------------------------------------------------
Name the data type of this expression:
```javascript
[":-)"]
```
>
`Array` a.k.a. list

------------------------------------------------------
Each of these is an example of what:
`=`
`<=`
`.`

>
an operator

`=`   assignment operator (`x = 22`)
`<=`  less-than-or-equal comparator operator (`x < 23`)
`.`   dot operator (`position.x`)

------------------------------------------------------
Given the following code:
```javascript
let x = 32;
x -= 30;
```
Evaluate this expression: 
```javascript
x == 2
```
>
`true`

------------------------------------------------------
Given the following code:
```javascript
let x = 1;
```
Evaluate this expression: 
```javascript
x + 1 + " " + x + 1
```
>
`"2 11"`

**explanation:** the code is evaluated from left to right.

------------------------------------------------------
Given the following code:
```javascript
let person = { 
  name: "Fred",
  age: 22,
 };
```
What expression would evaluate to `"Fred"`? 
>
`person.name`

------------------------------------------------------
Is this an expression or a statement:
```javascript
if(x < 10){
    x = x + 1;
}
```
>
statement

------------------------------------------------------
Given the following code:
```javascript
x = 12;
if(x < 10){
    x = x + 1;
}
```
What is the value of `x`?
>
12


------------------------------------------------------
Given the following code:
```javascript
let monster = {
  name: "Fred",
  age: 220,
  possessions: [ { type: "potion", texture: "Slime" } ]
 };
```
What expression would evaluate to `"Slime"`?
>
`monster.possessions[0].texture`


------------------------------------------------------
How many side effects does this function have?
```javascript
let onBirthday = (person) =>{
    person.age += 1;
    console.log("happy birthday " + person.name)
}
```
>
2

- the passed-in object's attribute is changed
- text is printed to the console.

------------------------------------------------------
What is the value of `monster` after this statement runs?
```javascript
let monster;
```
>
`undefined`

-------------------------------------------------------

Given the following code:
```javascript
let x = 1;
setTimeout(()=>{
    x = x*2; // multiply x by 2
}, 0);
x = x + 1; // add 1 to x
```
What is the value of `x`?

>
`4`

**explanation:** the code in the function passed to setTimeout gets called last.

-------------------------------------------------------

Given the following code:
```javascript
let items = [0, 2];
let first = items[0];
items[0] = items[1];
items[1] = first;
```
What is the value of `items`?

>
`[2, 0]`

**explanation:** assignment points variables to values not to variables.

-------------------------------------------------------
Given the following code:
```javascript
let personOne = { name: 'Roxy', shirtColor: Colors.green };
let personTwo = { name: 'Roxy', shirtColor: Colors.green };

personTwo.shirtColor = Colors.red;
```
What is the value of `personOne.shirtColor`?

>
`Colors.green`

**explanation:** having the same properties does not make objects connected. They're not the same instance. It's two people with matching shirts and names.

-------------------------------------------------------------------------------------------------------
Given the following code:
```javascript
let personOne = { name: 'Roxy', shirtColor: Colors.green };
let personTwo = personOne;

personTwo.shirtColor = Colors.red;
```
What is the value of `personOne.shirtColor`?

>
`Colors.red`

**explanation:** more than one variable can reference the same value/`instance`. Both variables refer to the same person, so changing the color of the person's shirt effects what is stored in both variables.
