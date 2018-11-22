const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase();
}

PangramFinder.prototype.isPangram = function () {
  let allLetters = this.alphabet;
  let usedLetters = this.phrase.split("");


  allLetters.forEach((letter) => {
    if (usedLetters.includes(letter)) {
      allLetters.splice(letter, 1)
    };
  });

  if (allLetters.length > 0) {
    return false;
  } else {
    return true;
  }
}

module.exports = PangramFinder;
