export function Entry (body) {
  this.body = body
  this.words = []
  this.letters = []
  this.teaser = ""
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
  for (var i = 0; i < lettersArray.length; i++) {
    if (vowels.includes(lettersArray[i]))
      this.vowelsNumber ++
    }
};
Entry.prototype.numberOfConsonants = function () {
  var lettersArray = this.body.split("")
  var vowels = ["a", "e", "i", "o", "u"]
  for (var i = 0; i < lettersArray.length; i++) {
    if (vowels.includes(lettersArray[i])===false)
      this.consonantsNumber ++
    }
};
Entry.prototype.teaser8 = function() {
  var firstEight = []
  for (var i = 0; i <= 7; i++){
    firstEight.push(this.words[i]);
  }
  this.teaser = firstEight.join(" ");
};
