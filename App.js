// function areaOfTriangle(a, b, c) {
//     var s = calculatingSides(a, b, c);
//     var area = s * (s - a) * (s - b) * (s - c);
//     return area;
// }

// function calculatingSides(a, b, c) {
//     var s = (a + b + c) / 2;
//     return s;
// }

// var a = 10;
// var b = 200;
// var c = 30;
// console.log(areaOfTriangle(a, b, c));


// function deleteVowels(sentence) {
//     for (var i = 0; i < sentence.length; i++) {
//         if (sentence[i] == 'a' || sentence == 'e' || sentence[i] == 'i' || sentence == 'o' || sentence[i] == 'u') {
//             sentence = sentence.replace(sentence[i], '');
//         }
//     }
//     return sentence;
// }

// var sentence = "My name is areeb shah.";
// if (sentence.length < 25) {
//     console.log("After deleting vowels: " + deleteVowels(sentence));
// }
// else {
//     console.log("**The sentense is more than 25 character**");
// }


// function meters(distance) {
//     return distance * 1000;
// }

// function feet(distance) {
//     return distance * 3280.84;
// }

// function inches(distance) {
//     return distance * 39370.1;
// }

// function centimeters(distance) {
//     return distance * 100000;
// }

// var distance = 20;

// console.log("Distance in meters: " + meters(distance));
// console.log("Distance in feet: " + feet(distance));
// console.log("Distance in inches: " + inches(distance));
// console.log("Distance in centimeters: " + centimeters(distance));


// function indexOf(str, ch) {
//     var index = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] !== ch) {
//             index++;
//         }
//         else {
//             break;
//         }
//     }
//     return index;
// }

// var str = "Hello"
// var ch = "o";
// console.log(ch + " is at index " + indexOf(str, ch));



// function leapYear(year) {
//     if (year % 4 == 0) {
//         return "Year is Leap";
//     }
//     else {
//         return "year is not Leap";
//     }
// }

// var year = 2008;
// console.log(leapYear(year));


// function overtimePay(pay, hour) {
//     return pay * hour;
// }

// var pay = 12;
// var hour = 40;
// console.log("Employee overtime pay is: " + overtimePay(pay, hour))




// function power(base,exponent){
//     var value=1;
//     for(var i=1;i<=exponent;i++)
//     {
//         value*=base;
//     }
//     return value;
// }

// var base=2;
// var exponent=3;
// console.log(power(base,exponent));


// function mainFunction(){
//     var mathMarks=10;
//     var englishMarks=20;
//     var urduMarks=40
//     console.log("Average Marks: "+average(mathMarks,englishMarks,urduMarks));
//     console.log("Percentage: "+percentage(mathMarks,englishMarks,urduMarks));
// }

// function average(mathMarks,englishMarks,urduMarks){
// var aver=(mathMarks+englishMarks+urduMarks)/3;
// return aver;
// }

// function percentage(mathMarks,englishMarks,urduMarks){
// var totalMarks=200;
// var perc=((mathMarks+englishMarks+urduMarks)*100)/totalMarks;
// return perc;
// }

// mainFunction();


// function totalCurrency(amount){
//     var hundred,fifty,ten;
//     hundred=parseInt((amount/100));
//     fifty=parseInt(((amount % 100) / 50));
//     ten=parseInt(((amount % 100) % 50) / 10);
//     return (hundred+" hundred notes "+fifty+" fifty notes "+ten+" ten notes.")
// }

// var amount = 260;
// console.log("You will have "+totalCurrency(amount))


// function areaOfTriangle(a,b,c){
//     var s=calculatingSides(a,b,c);
//     var area=s*(s-a)*(s-b)*(s-c);
//     return area;
//     }
    
//     function calculatingSides(a,b,c){
//     var s=(a+b+c)/2;
//     return s;
//     }
    
//     var a=10;
//     var b=200;
//     var c=30;
//     console.log(areaOfTriangle(a,b,c));


