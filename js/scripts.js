//BUSINESS LOGIC

var vowel = ["a", "e", "i", "o", "u"]

function masterpig (phrase) {
  lowercasephrase = phrase.toLowerCase();
  var words = lowercasephrase.split(" ");
  var pigLatin = " ";
  words.forEach (function (sentence) {
    pigLatin+= pigLatinTranslator (sentence);
    pigLatin+= " ";
  });
  return pigLatin[0].toUpperCase() + pigLatin.slice(1)
}


function pigLatinTranslator(sentence) {
  if (vowelFinder(sentence[index]) === true) {
    for (var index = 0; index < word.length; index += 1) {
      if (index > 0 && word[index] === "u" && word[index - 1] === "q") {
        
      }
    }
  }
}

function vowelFinder(letter) {
  for (var index = 0; index <= vowel.length; index += 1) {
    if (letter === vowel[index]) {
      return true
    } else {
      return false;
    }
  }
};

//FRONTEND LOGIC

$(document).ready(function(){
  $("form#latinForm").submit(function() {
    event.preventDefault();
    var userInput = $("input#sentence").val();
    // var sentenceArray = userInput.split("");
  });
});
