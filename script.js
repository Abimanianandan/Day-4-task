//1. Do the below programs in anonymous function & IIFE:-

//a. Print odd numbers in an array using anonymous function :-
var result=[];
var a1=function (number1){
    for(var i=0;i<number1.length;i++){
        if(number1[i]%2!==0){
            result.push(number1[i]);
        }
      }
    return result
}
 console.log(a1([1,2,3,4,5,6,7,8,9,10]));

// IIFE function :-
var result1=[];
(function (number2){
    for(var i=0;i<number2.length;i++){
        if(number2[i]%2!==0){
            result1.push(number2[i]);
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
})(["viRat koHli"]);

//c.Sum of all numbers in an array using anonymous function:-
var sum=0;
var c=function (arr0){
    for(var i=0;i<arr0.length;i++){
        sum=sum+(arr0[i]);
    }
    return sum
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
var d=function(pal){ 
  var myPrimeArray = pal.filter(element=>{
      for (var i = 2; i < element; i++){
          if (element % i === 0){
             return false
          } 
      }
      return element !== 1
      })
      return myPrimeArray
  }
  console.log(d([1,2,3,4,5,6,7,8,9,10]));


//IIFE function:-
(function (prime2){ 
  var primenumber = prime2.filter(element2=>{
      for (var i = 2; i < element2; i++){
          if (element2 % i === 0){
             return false
          }
      }
      return element2 !== 1
    })
    console.log(primenumber);
})([1,2,3,4,5,6,7,8,9,10,11]);


//e.Return all the palindromes in an array using anonymous function:-
var result6=[];
var a=function(pal){
  for(var i=0;i<pal.length;i++){
   var data=pal[i].split("").reverse().join("");
   if(data===pal[i]){
       result6.push(pal[i]);
   }
  }
  return result6
}
console.log(a(["dad","mom","data"]));

//IIFE function:-
var result6=[];
(function(pal1){
  for(var i=0;i<pal1.length;i++){
   var data=pal1[i].split("").reverse().join("");
   if(data===pal1[i]){
       result6.push(pal1[i]);
   }
  }
  console.log(result6); 
})(["dad","mom","data","121","233"]);

// f.Return median of two sorted arrays of the same size using anonymous function:-
var f=function(arr2,arr3){
var arr4=[...arr2,...arr3];
arr4.sort((a,b)=>a-b);
var n=arr4.length;
if(n%2===0){
  return (arr4[n/2 -1]+arr4[n/2])/2
}
else{
  return Math.floor(n/2)
}
}
console.log(f([1,3,5,7],[2,4,6,8]));

// IIFE function:-
(function(arr6,arr7){
  var arr8=[...arr6,...arr7];
  arr8.sort((a,b)=>a-b);
  var n=arr8.length;
  if(n%2===0){
    return (arr8[n/2 -1]+arr8[n/2])/2
  }
  else{
    return Math.floor(n/2)
  }
})
console.log(f([1,3,5,7],[2,4,6,8]));

//g.Remove duplicates from an array using anonymous function :-
var g=function(array1){
   var dup = [...new Set(array1)];
   return(dup)
 }
 console.log(g([1,1,2,3,3,4,5,5,6,7,8,9]));

//IIFE function:-
(function(array2){
  var dup1 = [...new Set(array2)];
  console.log(dup1);
 })([1,1,2,3,4,4,5,6,7,8]);

// h.Rotate an array by k times using anonymous function:-
var z= function(nums,k){
for (var i=0;i<k;i++) {
      nums.push(nums.shift());
  }  
 return nums
}
  console.log(z([1,2,3,4,5],3));

// IIFE function:-
(function(num,k){
  for(var i=0;i<k;i++){
      num.push(num.shift());
  }
  console.log(num);
})([1,2,3,4,5],3);


//2.Do the below programs in arrow functions.

//a. Print odd numbers in an array:-
var answer=[];
var odd=(num1)=>{
    for(var i=0;i<num1.length;i++){
        if(num1[i]%2!==0){
            answer.push(num1[i]);
        }
    }
  return answer
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]));

//b.Convert all the strings to title caps in a string array:-
var b1=(str1)=>{
    str1 = str1.toLowerCase().split(" ");
    for (var i=0;i<str1.length; i++) {
        str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
    }
    return str1.join(" ")
}
console.log(b1("hello world"));

//c.Sum of all numbers in an array:-
var sum=0;
var c1=(num2)=>{
    for(var i=0;i<num2.length;i++){
        sum=sum+(num2[i]);
    }
    return sum
}
console.log(c1([1,2,3,4,5,6,7,8,9,10]));

//d.Return all the prime numbers in an array:-
var prime=(pal1)=>{ 
  var myPrimeArray = pal1.filter(element=>{
      for (var i = 2; i < element; i++){
          if (element % i === 0){
             return false
          } 
      }
      return element !== 1
      })
      return myPrimeArray
  }
  console.log(d([1,2,3,4,5,6,7,8,9,10]))

// e.Return all the palindromes in an array:-
  var result6=[];
  var pal=(arr5)=>{
  for(var i=0;i<arr5.length;i++){
   var data=arr5[i].split("").reverse().join("");
   if(data===arr5[i]){
       result6.push(arr5[i])
   }
  }
  return result6
}
console.log(pal(["dad","mom","data","modom"]));
