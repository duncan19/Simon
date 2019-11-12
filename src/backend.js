export function Entry (body) {
  this.body = body
  this.words = []
  this.letters = []
  this.wordsNumber = 0
  this.vowelsNumber = 0
  this.consonantsNumber = 0
}


Entry.prototype.splitWords = function () {
  var wordsArray = this.body.split(" ")
  this.words = wordsArray
};

Entry.prototype.numberOfWords = function () {
  this.wordsNumber += this.words.length
};

Entry.prototype.numberOfVowels = function () {
  var lettersArray = this.body.split("")
  var vowels = ["a", "e", "i", "o", "u"]
  console.log(lettersArray);
  for (var i = 0; i < lettersArray.length; i++) {
    if (vowels.includes(lettersArray[i]))
      this.vowelsNumber ++
    }
};
