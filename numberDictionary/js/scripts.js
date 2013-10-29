var dictionary = {"0" : "", "1" : "one", "2" : "two", "3" : "three", "4" : "four", "5" : "five", "6" : "six", "7" : "seven", "8" : "eight", "9" : "nine", "10" : "ten", "11" : "eleven", "12" : "twelve", "13" : "thirteen", "14" : "fourteen", "15" : "fifteen", "16" : "sixteen", "17" : "seventeen", "18" : "eighteen", "19" : "nineteen", "20" : "twenty", "30" : "thirty", "40" : "forty", "50" : "fifty", "60" : "sixty", "70" : "seventy", "80" : "eighty", "90" : "ninety"}
var cases = ["hundred", "thousand", "million", "billion", "trillion"];

function numberDictionary(number) {

  var expCaseOfNumber=lengthOfNumber(number);
  var numberCase = Math.pow(1000, expCaseOfNumber);

  if (number <= 20) {
    return dictionary[number];
  } else if (number < 99 && (number % 10)===0) {
      return dictionary[number];
  } else if (number < 99) {
      return numberDictionary(Math.floor(number/10)*10) + " " + numberDictionary(number%10);
  } else if (number < 999) {
      return numberDictionary(Math.floor(number/100)) + " " + cases[0] + " " + numberDictionary(number%100);
  } else if (number < 999999999999999) {
    return (numberDictionary(Math.floor(number/numberCase)) + " " + cases[expCaseOfNumber] + " " + numberDictionary(number%numberCase)).replace("  ", " ");
  } else return ("too high");
}

  function lengthOfNumber(number) {
  number = number.toString().length;
  return Math.floor((number-1)/3);
}

$(function() {
  $("form#get-number").submit(function() {
    var inputNumber = $("input#input-number").val();

    numberWord = numberDictionary(inputNumber);
    formattedNumberWord = numberWord.split("ty ").join("ty-")
    replace("ty ", "ty-");
    $(".answer").empty().append(formattedNumberWord);
    $("#hiding").show();
    return false;
  });
});
