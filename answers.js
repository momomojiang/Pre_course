1,Setting and Swapping 
//set myNumber to 42. Set myName to your name.
//Now swap myNumber into My name & vice versa. 

var myNumebr = 42;
var myName = 'Rui';
console.log("myNumber= " + myName)
console.log("myName= " + myNumber)

2,Print -52 to 1066
//print integers from -52 to 1066 using a FOR loop.

for(var i = -52; i <1067; i++){
   console.log(i)
}

3,Don not Worry, Be Happy
//Create beCheerful(). within it. console.log string"good morning!" call it
//98 times.

function beCheerful() {
  if(var i=1; i < 99; i++){
   console.log("good morning!")
   }
}

4,Multiples of Three - but not all
//using FOR,print multilpes of 3 form -300 to 0. skip -3 and -6.

for(var i = -300; i<1; i+=3){
   if(i == -6 || i == -3){
      continue;
   }
   console.log(i)
}

5, Printing integers with while
//print integers form 2000 to 5280, using a WHILE.

var i = 2000
while( i < 5281 )
{
   console.log(i);
   i += 1;
}
 
6, You say its your birthday
//if 2 given numbers represent your birth month and day in either order, log 
//"how did you know?", else log "just another day"

function birthday(sayYourBirthday){

if(((sayYourBirthday[0] == 5) && (sayYourBirthday[1] == 21)) || ((sayYourBirthday[0] == 21) && (sayYourBirthday[1] == 5)))
{

console.log('how did you know?');
}

else

{

console.log('just another day!')

}


7, Leap Year
//Write a function that determines wheather a given year is a leap year, unless it is divisible by 100. 
//However, if it is divisible by 400, then it is. 

function leapYear(year) {
if (((year % 4 == 0) && (year % 100 !=0)) || (year % 400 == 0 )) {
console.log("it is Leap Year");
}
else 
{
console.log("it's not a Leap Year");
  
}
}

8,Print and Count
//print all integer multiples of 5, from 512 to 4096.
//Afterward, also log how many there were.

var arr = []
for(i = 512; i < 4097; i++){
   if(i % 5 == 0){
   console.log(i)
   arr.push(i)
    }
console.log('total mutiples is: 'arr.length)
}

9, Multiples of Six
//Print multiples of 6 up to 60,000, using a WHILE. 

var i = 0;
while(i < 600001){
i++;
if(i % 6 == 0){
console.log(i);
}
}

10, Counting, the Dojo Way
//Print integers 1 to 100. if divisble by 5, print "Coding" instead, if by 10 also print "Dojo"

for( var i = 1; i <101; i++){
if(i % 10 == 0){
console.log('Dojo');
}
else if (i % 5 == 0){
console.log('Coding');
}
else(
console.log(i))
}

11,What do you know?
//Your function will be given an input parameter incoming. Please console.log this value.

function givenVaule(incoming){
console.log(incoming)
}

//for example:
function returnNum(i){
return i+3
}

12, Whoa, That Suckers Huge
//Add odd intergers from -300,000 to 300,000 and console.log the final sum. Is there a shortcut?

var sum = 0;
for(var i = -300000; i < 300001; i++){
  if( i % 2 != 0){
  sum = sum + i;
}
}
console.log(sum);


13, Countdown by Four
//Log positive number starting at 2016, counting down by fours (exclude 0), without a FOR loop.

var i = 2016
while( i > 0 && i != 4){
	i -= 4;
	console.log(i)
}

14, Flexible Countdown
//Based on earlier "countdown by Fours", given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using FOR 
// For (2,9,3), print 9 6 3(on successive line)

function printMix(low, high, mult){
  for(var i = high; i > low; i--){
    if(i % mult == 0){
    console.log(i)
    }
  }
}

 15,The Final Countdown
 // This is bansed on "Flexibel countdown". The parameter names are not as helpful, but problem is essentially identical; don't be thrown off!
 //Give 4 parameters(param1, param2, param3, param4), print the multiples of param1, starting at  param2 and extending to param3. One 
 //exception: if a multiples is equal to param4, then skip(don't print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which
 // are all of the multiples of 3 between 5 and 17 and excluding the value 9)

function finalCountdown (param1, param2, param3, param4){
let i = param3;
    while (i > param2) {
        if (i == param4) {
            continue;
        } else if (i % param1 == 0) {
            console.log(i);
        }
        i--;
    }
}

16, Countdown
// Create a function that accepts a number as an input. 
//Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). 
//How long is this array?

function countDown(num) {
	let arr = [];
	for ( var i = num; i >= 0; i--){
		arr.push(i);
	}
	console.log(arr);
	console.log(`this is the length ${arr.length}`);
}

17, Print and Return
//Your function will receive an array with two numbers. Print the first value and return the second.

function printAndCount(arr) {
	window.print(arr[0]);
	return arr[1];
}
printAndCount([5,6]);

18, First Plus length
//Given an array, return the sum of the first vaule in the array, plus the array's length. What happens if the array's 
//first number is not a number, but a string (like 'what ?') or a boolean (like false).

function firstPlusLength(arr) {
  return arr[0].length + arr.length;
}

firstPlusLength(['hello',1,2,3])

19, Values Greater than second
//For [(1,3,5,7,9,13)], print values that are greater than its 2nd value. Return how many values this is. 

function greaterThanSecondValue(arr) {
  let newArr = arr.filter((c) => c > arr[1]);
  console.log(`The remaining  ${newArr.length} vaules are ${newArr}.`)
}
greaterThanSecondValue([1, 3, 5, 7, 9, 13])

20,Values Greater than Second, Generalized
//Write a function that accepts any array, and returns a new array with the array values taht are greater
// that its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function greaterThanSecond(arr) {
	let newArr = arr.filter((a) => a > arr[1])
	console.log(`The remaining ${newArr.length} values are ${newArr}.`)
}
greaterThanSecond([1, 3, 5, 7, 9, 13])

21,This is Length, That Values
//Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function thatValues(num1, num2) {
   let arr = [];
    if (num1 == num2) {
        console.log("Jinx!");
    } else {
    	for (var i = 0; i < num1; i++){
    		arr.push(num2);
    	}
    	return arr;
    }
}


22, Fit the First Values
//Your function should accept an array. If value at [0] is greater than array's length, print "Too big!"; if Value at [0] is less
//than array's length, print "Too smaill!"; otherwise print "Just right!"

function fitFirstValues(arr) {
    if(arr[0] > arr.length){
		console.log("Too big!");
	}else if (arr[0] < arr.length){
		console.log("Too smaill!");
		}
		else {
			console.log("Just right!")
		}
	}


23,Fahrenheit to Celsius
//Kevin wants to convert between temperature scales. Create fahrenheitToCelsius (fDegrees) that accepts a number of degrees
//in Fahrenheit, and returns the equivalent temperature as expressed in Celsius. For review, Fahrenheit = (9/5 * Celsius) +32

function fahrenheitToCelsius(fDegrees) {
	let celsius = (fDegrees - 32) / 1.8;
	return fDegrees + ' fahrenheit equals ' + celsius.toFixed(1) + ' celsius.'
}

24, Celsius to Fahrenheit
//Create celsiusToFahrenheit (cDegrees) that accepts number of degrees Celsius and returns the equivalent temperature 
//express in Fahrenheit degrees. 

function celsiusToFahrenheit (cDegrees) {
	let fahrenheit = cDegrees * 1.8 + 32 ;
	return cDegrees + " celsius equals " + fahrenheit.toFixed(1) + " fahrenheit."

}

25, Biggie Size
//Given an array, write a function that changes all positive numbers in the array to 'big'. Example: makeItBig([-1,3,5,-5]) returns
//that same array, changed to [-1,'big', 'big',-5].

function biggieSize(arr) {
	for( var num = 0; num < arr.length; num++){
		if(arr[num] > 0){
		arr[num] = 'big';
	  }
	  }
   return arr;	
} 
biggieSize([-1,3,5]);

26，Print low, Return High
//Create a function that takes array of numbers. The function should print the lowest value in the array, and return the hightest 
//value in the array.

function prinLowRetHigh(arr) {
   var low = arr[0];
   var high = arr[0];
   for ( var i = 0; i < arr.length; i++) {
   	if (arr[i] < low){
   		low = arr[i];
   	}else if (arr[i] > high) {
   		high = arr[i];
   	}
   }
   console.log(low);
   return high;
}

27,Print One, Return another
//Build a function that takes array of numebrs. The fucntion should print second-to-last value in the array,and return first odd 
//vaule in the array.

function prinOneRetAnother(arr) {
   let firstOdd = arr[i]
   for( var i = 0; i < arr.length; i++){
      if (arr[i] % 2 != 0){
         firstOdd = arr[i]
         break;
      }
   }
   console.log(arr[arr.length-2]);
   return firstOdd;
}

28, Double Vision
//Give array, creat a function to return a new array where each value in the original has been doubled. Calling double ([1,2,3])
// should return [2,4,6] without changing original.

function doubleVision(arr) {
   var newArr = [];
   for(var i = 0; i < arr.length; i++){
   	 newArr[i] = arr[i]*2;
   	}
    return newArr
}

29, Count Positives
//Given array of numbers, create function to replace last value with number of positive values. Example: countPositive([-1,1,1,1])
//changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
	 var poSum = 0;
	 for( var i = 0; i < arr.length; i++){
	 	if( arr[i] > 0 ){
           poSum += 1;
       }

	 }	
	 arr[arr.length-1] = poSum;
	return arr;
}

30, Evens and Odds
//Create a function that accepts an array. Every time that array has three values in a row, print "That is odd!"
// Every time the array has three events in a row, print "Even more so !".

function evenAndOdds(arr) {
   let odds = 0;
   let evens = 0;
   for( var i = 0; i < arr.length; i++){
   	if( arr[i] % 2 == 0){
   		evens ++;
   		odds = 0;
   	}else {
   		odds ++;
   		evens = 0;
   	}
   	if (odds == 3) {
   		console.log("That's Odd!");
   		odds = 0;
   	}else if (evens == 3) {
   		console.log("Even more so!");
   		evens = 0;
   	}
   }
   }
  evenAndOdds([4,6,2,27,58,98,44,21,66,3,7,5])

  31, Increment the second
  //Given arr, add 1 to odd elements ([1], [3], etc), console.log all values and return arr.

  function incrementSecond(arr) {
  	for(i = 0; i < arr.length; i++){
  		if( arr[i] % 2 !== 0){
  			arr[i] = arr[i] + 1;
  		}
  	}
  	return arr;
  }

  32, Previous Lengths
  //You are passed an array containing strings. Working within that same array, replace each string with
  //a number -- the length of the string are previous array index-- and return the array.

  function previousLengths(arr) {
     for(i = arr.length-1; i >0; i--){
        arr[i] = arr[i - 1].length;
     }
     return arr;
  }

  33, Add Seven to Most
  //Build function that accepts array. Return a new array with all values axcepts first, adding 7 to each
  //Do not alter the original array.
   
   function addSeven(arr) {
  	for(i = arr.length -1; i >0; i--){
  		if (arr[i] !== arr[0]){
  			arr[i] = arr[i] + 7;
  		}

  	}
  	return arr;
  }

34,Reverse array
//Given array, wirite a function to reverse values, in-place. 

function reverse(arr) {
 var newArr = [];
 newArr = arr.reverse();
 return newArr;
};

35, Outlook: Negative
//Given an array, create and return a new one containing all the values of the provided array,
//made negative (not simply mutiplied by -1). Given [1,-3,5] return [-1,-3,-5];

function negative(arr) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > 0){
			arr[i] = arr[i] - arr[i]*2;
		}
	}
	return arr;
}

36, Always Hungry
//Create a function that accepts an array and prints 'yummy' each time one of the values is 
// equal to 'food', if no array elements are 'food' then print 'i'm hungry'once.

function hungry(arr) {
	let foodCount = 0;
	for( var i = 0; i < arr.length; i++){
		if(arr[i] == 'food'){
			console.log('yummy');
			foodCount++;
		}
	}
	if(foodCount == 0){
		console.log('i am hungry');
	}
}

37, Swap toward the center
//Given array, swap first and last, third and third-to-last.

function swap(arr) {
	for(var i = 0; i < arr.length/2; i+=2){
		let temp = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = temp;
	}
	return arr;
}

38, Scale the Array
// Given array arr and number num, multipley each arr value by num and return the changed arr
 function scaleArray(arr,num) {
   for( var i = 0; i < arr.length; i++){
   	arr[i] = arr[i]*num;
   	}
   	return arr;
 }
