
var vowel = ["a", "e", "i", "o", "u"]

$(document).ready(function(){
  $("form#latinForm").submit(function() {
    event.preventDefault();
    var userInput = $("input#sentence").val();
    // console.log(userInput);
    var sentenceArray = userInput.split("");
    // console.log(sentenceArray);

    for (var index = 0; index <= sentenceArray; index += 1) {
      if (newArray[index])
    }
  });
});
