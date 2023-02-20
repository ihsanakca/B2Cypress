/**
 * variable naming rules: same as java
 * Primitive data type
 * numbers :123,120.50
 * String :'apple'
 * Boolean : true,false
 * Undefined : variable does not have a value yet
 * Null :
 * 
 * 3 farklı variable tipi vardır
 *  var: En. variable kısaltılmış hali
 *          * var ise globally-scope bir değişken tanımlama yöntemidir.
 *          * Değerini daha sonra değiştirebilir ve tekrar aynı değişkeni tanımlayabilirsiniz.
 * 
 *  let: En. let - yani Let is equal to .. yani değer... eşit olsun.
 *          * let, block-scope bir değişken tanımlama yöntemidir.
 *          * block dediğimiz yapılar ise küme parantezlerinin arasında kalan yerdir.
 *          * let ile tanımlanan değişkenlerin değeri daha sonra değiştirilebilir.
 *          * fakat aynı değişkeni tekrar tanımlayamazsınız.
 * 
 *  const: En. sabit anlamına gelen constant kelimesinin kısatlaması
 *          * değişkenin değeri sabit olur değişmez Pi sayısı gibi
 */


var name='Mike'
var age=35;
var name_object={firstName:"Mike", lastName:"Knight"}
var truth=true
var skils=["HTML",'CSS',"JS"]
var a =null;

// Object oluşturalım
var student={
firstName:"Jake",
lastName:"Knight",
age:30,
height:180,

fullName:function(){
    return this.firstName+" "+this.lastName
    }
}
const agevalue=student.age

//to run in console

console.log(agevalue)
console.log(student.fullName())




/**
 *    code consolda run için
 * 1-terminalden bu dizinin bulunduğu classa gelinir
 *      PS C:\Users\Hp\Desktop\Cy-B3-pr> cd cypress/e2e
 *      PS C:\Users\Hp\Desktop\Cy-B3-pr\cypress\e2e> cd javascript_basic
 * 2- node ile birlikte tam file ismi yazılır
 *      PS C:\Users\Hp\Desktop\Cy-B3-pr\cypress\e2e> cd javascript_basic> node datatypes-objects.js
 */