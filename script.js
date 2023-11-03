//1. Do the below programs in anonymous function & IIFE:-

//a. Print odd numbers in an array using anonymous function :-
var result=[];
var a=function (arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result.push(arr[i]);
        }
    }
    return result;
}
 console.log(a([1,2,3,4,5,6,7,8,9,10]));

// IIFE function :-
var result1=[];
(function (arr){
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            result1.push(arr[i]);
        }
    }
    console.log(result1);
})([11,12,13,14,15,16,17,18,19,20])

//b.Convert all the strings to title caps in a string array, using anonymous function :-
var b=function(str){
  res=str.toString();
  data=res.toLowerCase().split(" ");
  for(var i=0;i<data.length;i++){
    data[i]=data[i].charAt(0).toUpperCase()+data[i].slice(1);
  }
  return data.join(" ")
}
console.log(b(["viRat koHli"]));
// IIFE function:-
(function(str){
  res=str.toString();
  data=res.toLowerCase().split(" ");
  for(var i=0;i<data.length;i++){
    data[i]=data[i].charAt(0).toUpperCase()+data[i].slice(1);
  }
  console.log(data.join(" "));
})(b(["viRat koHli"]));

//c.Sum of all numbers in an array using anonymous function:-
var sum=0;
var c=function (arr1){
    for(var i=0;i<arr1.length;i++){
        sum=sum+(arr1[i]);
    }
    return sum;
}
console.log(c([1,2,3,4,5,6,7,8,9,10]));

 //IIFE function:-
var sum=0;
(function (arr1){
    for(var i=0;i<arr1.length;i++){
        sum=sum+(arr1[i]);
    }
    console.log(sum);
})([1,2,3,4,5])

//d.Return all the prime numbers in an array using anonymous function:-
var result2=[];
  var d=function(numArray){
  numArray = numArray.filter((number)=>{
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number>1 && number%i===0 ){ 
        return false
    }     
      }
      result2.push(number);
    })
     return result2;
}
console.log(d([1,2,3,4,5,6,7,8,9,10]));
//IIFE function:-
(function(numArray){
  numArray = numArray.filter((number)=>{
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0){ 
       return false;
      }
    }
    return true;
  });
  console.log(numArray);
})([1,2,3,4,5,6,7,8,9,10]);

//e.Return all the palindromes in an array using anonymous function:-
var result6=[];
var a=function(arr5){
  for(var i=0;i<arr5.length;i++){
   var data=arr5[i].split("").reverse().join("");
   if(data===arr5[i]){
       result6.push(arr5[i]);
   }
  }
  return result6;
}
console.log(a(["dad","mom","data"]));

//IIFE function:-
var result6=[];
(function(arr5){
  for(var i=0;i<arr5.length;i++){
   var data=arr5[i].split("").reverse().join("");
   if(data===arr5[i]){
       result6.push(arr5[i]);
   }
  }
  console.log(result6); 
})(["dad","mom","data","121","233"]);

// f.Return median of two sorted arrays of the same size using anonymous function:-
let f=function(arr1,arr2){
let arr3=[...arr1,...arr2];
arr3.sort((a,b)=>a-b);
let n=arr3.length;
if(n%2===0){
  return (arr3[n/2 -1]+arr3[n/2])/2
}
else{
  return Math.floor(n/2)
}
}
console.log(f([1,3,5,7],[2,4,6,8]));

// IIFE function:-
(function(arr1,arr2){
  let arr3=[...arr1,...arr2];
  arr3.sort((a,b)=>a-b);
  let n=arr3.length;
  if(n%2===0){
    return (arr3[n/2 -1]+arr3[n/2])/2
  }
  else{
    return Math.floor(n/2)
  }
  })(console.log(f([1,3,5,7],[2,4,6,8])));

//g.Remove duplicates from an array using anonymous function :-
let g=function(array){
   let dup = [...new Set(array)];
   return(dup);
 }
 console.log(g([1,1,2,3,3,4,5,5,6,7,8,9]));

//IIFE function:-
(function(array){
  let dup1 = [...new Set(array)];
  console.log(dup1);
 })([1,1,2,3,4,4,5,6,7,8]);

// h.Rotate an array by k times using anonymous function:-
let z= function(nums,k){
for (let i = 0; i < k; i++) {
      nums.push(nums.shift())
  }
 return nums;
}
  console.log(z([1,2,3,4,5],3));

// IIFE function:-
(function(nums,k){
 for (let i = 0; i < k; i++) {
      nums.push(nums.shift());
}
console.log(nums);
})([1,2,3,4,5],3)

//2.Do the below programs in arrow functions.

//a. Print odd numbers in an array:-
var answer=[];
var odd=(arr)=>{
    for(var i=0;i<arr.length;i++){
        if(arr[i]%2!==0){
            answer.push(arr[i]);
        }
    }
  return answer;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));

//b.Convert all the strings to title caps in a string array:-
var b1=(str)=>{
    str = str.toLowerCase().split(" ");
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
}
console.log(b1("hello world"));

//c.Sum of all numbers in an array:-
var sum=0;
var c1=(arr1)=>{
    for(var i=0;i<arr1.length;i++){
        sum=sum+(arr1[i]);
    }
    return sum;
}
console.log(c1([1,2,3,4,5,6,7,8,9,10]));

//d.Return all the prime numbers in an array:-
var result2=[];
  var d1=(numArray)=>{
  numArray = numArray.filter((number)=>{
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number>1 && number%i===0){ 
       return false
    }     
      }
       result2.push(number);
    })
     return result2;
}
console.log(d1([1,2,3,4,5,6,7,8,9,10,11]));

// e.Return all the palindromes in an array:-
  var result6=[];
  var pal=(arr5)=>{
  for(var i=0;i<arr5.length;i++){
   var data=arr5[i].split("").reverse().join("");
   if(data===arr5[i]){
       result6.push(arr5[i]);
   }
  }
  return result6;
}
console.log(pal(["dad","mom","data","modom"]));
