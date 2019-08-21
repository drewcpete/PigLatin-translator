//BUSINESS LOGIC

var vowel = ['a', 'e', 'i', 'o', 'u']

function masterpig (phrase) {
  var lowercasephrase = phrase.toLowerCase();
  var words = lowercasephrase.split(" ");
  var pigLatin = "";
  words.forEach (function(sentence) {
    pigLatin+= pigLatinTranslator(sentence);
    pigLatin+= " ";
  });
  return pigLatin[0].toUpperCase() + pigLatin.slice(1)
}


function pigLatinTranslator(sentence) {
  if (vowelFinder(sentence[0]) === true)return sentence + "way"
  for (var index = 0; index < sentence.length; index = index += 1) {
    if (vowelFinder(sentence[index]) === true) {
      if (index > 0 && sentence[index] === "u" && sentence[index - 1] === "q") {
        //                      "ite"           +    "qu"               + "ay"
        return sentence.slice(index + 1) + sentence.slice(0, index + 1) + "ay"
      } else {
        return sentence.slice(index) + sentence.slice(0, index) + "ay"
      }
    }
  }
  return sentence;
}

function vowelFinder(letter) {
  for (var index = 0; index < vowel.length; index += 1) {
    if (letter === vowel[index])return true;
  }
  return false;
}

//FRONTEND LOGIC

$(document).ready(function(){
  $("form#latinForm").submit(function() {
    event.preventDefault();
    // var userInput = $("input#sentence").val();

    $("p#results").text(masterpig($("input#sentence").val()));

  });
});
