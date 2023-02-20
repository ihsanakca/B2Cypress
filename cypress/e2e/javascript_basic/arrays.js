//creating array
var scores=new Array(); //empty
var numbers=new Array(10) //array with initial size 10
var myNumber=new Array(9,5,10,3) //array with initial element

var athletes=Array(3) //array with initial size 3
var sing=Array("Red") //array with one element

//array examples

let tools=["Jest","Selenium","Cypress","TestCafe","PhantomJS","Protractor"]

//accessing array element

console.log(tools)
console.log(tools.toString())  //Jest,Selenium,Cypress,TestCafe,PhantomJS,Protractor
console.log(tools[0])  //index[0]-->Jest


const string=tools.toString()
console.log(string)

const join=tools.join(" * ")
console.log(join)  //.join(" * ") Jest * Selenium * Cypress * TestCafe * PhantomJS * Protractor

const pop=tools.pop()  // removes an element from the end of array
console.log(tools)  // ['Jest', 'Selenium', 'Cypress', 'TestCafe', 'PhantomJS']

console.log(pop)  // silineni gösterdi -->Protractor

const push=tools.push("SlimersJS")  //arraye ekleme yapalım..
console.log(tools)  //[ 'Jest', 'Selenium', 'Cypress', 'TestCafe', 'PhantomJS', 'SlimersJS' ]

console.log(push)  //6

const shift=tools.shift()// ilk elementi siler
console.log(tools) //[ 'Selenium', 'Cypress', 'TestCafe', 'PhantomJS', 'SlimersJS' ]

console.log(shift) //Jest

const unShift=tools.unshift("Selenoid")// ilk element olarak ekler
console.log(tools) //added Selenoid to beginning

console.log(unShift) //6

const sort=tools.sort()// sort elements
console.log(tools) 
console.log(sort) 

const reverse=tools.reverse()// reverse elementd
console.log(tools) 
console.log(reverse) 

tools.forEach((value)=>{
    if(value=="Cypress"){
        console.log("Cypress is trending now")
    }else{
        console.log("Element NOT found")
    }
})


