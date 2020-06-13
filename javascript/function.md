##Function Declaration

###1. Function declaration
```javascript
function name(param1,param2){body ... return;}
```
+ one function === one thing
+ name: doSomething, command, verb
+ e.g. createCardAndPoint => createCard, createPoint
+ function is object in JS
```javascript
function printHello(){
    console.log('Hello');
}
printHello(); //Hello

function log(message){
    console..log(message);
}

log('Hello@');
log(1234)
// 전달되는 파라미터의 타입이 명확하지 않아도 된다.
// 타입스크립트에서는 타입을 정의함
```


###2. Parameters
+ primitive parameters : passed by value
+ object parameters : passed by reference
```javascript
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie); //coder
``` 
+ 원시값 파라미터는 값 자체를 전달
+ 오브젝트 파라미터는 레퍼런스를 전달


###3. Default parameters (added in ES6)
```javascript
function showMessage(message,from='unknown'){
    console.log(`${message} by ${from}`)
}
showMessage('Hi!') //Hi! by inknown
```

###4. Rest parameters (added in ES6)
```javascript
function printAll(...args){  //args가 배열로 할당
    for(let i = 0 ; i < args.length; i++){
        console.log(args[i]);
    }

    for (const arg of args){
        console.log(arg)
    }
    
    args.forEach((arg)=>console.log(arg))
    //세 함수 모두 같은 역할
}

printAll('dream','coding','ellie');//dream coding ellie
```

###5. Local scope
```javascript
let globalMessage = 'global' // global variable
function printMessage(){
    let message = 'hello';  //local variable
    console.log(message)
    console.log(globalMessage)
}
printMessage() // hello
               // global
console.log(message) // message is not defined
```
+ 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

###6. Return a value
```javascript
function sum(a,b){
    return a+b;
}
const result = sum(1,2); //3
console.log(`sum:${sum(1,2)}`); //sum:3
```


###7. Early return, early exit
```javascript
//bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point <=10 ){
        return;
    }
    //long upgrade logic
}
```
+ 복잡합 로직이 필요할경우 조건이 맞지 않을 경우 리턴을 미리 하는게 효율적


---
##Function Expression
+ a function declaration can be called earlier than it is defined. (hoisted)
+ a function exporession is created when the execution reaches it. (할당된 후 사용 가능)
