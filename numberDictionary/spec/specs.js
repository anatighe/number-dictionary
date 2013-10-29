describe('numberDictionary', function() {
  it('returns words for numerical inputs', function() {
    numberDictionary(1).should.equal("one")
  });

  it('returns words for numerical inputs between 21 and 99', function() {
    numberDictionary(50).should.equal("fifty")
  });

  it('returns words for numerical inputs between 100 and 999', function() {
    numberDictionary(756).should.equal("seven hundred fifty six")
  });

  it('returns words for numerical inputs between 1000 and 999,999', function() {
    numberDictionary(6756).should.equal("six thousand seven hundred fifty six")
  });

  it('returns words for numerical inputs between 1000 and 999,999', function() {
    numberDictionary(76756).should.equal("seventy six thousand seven hundred fifty six")
  });
  it('returns words for numerical inputs between 1000 and 999,999', function() {
    numberDictionary(70006).should.equal("seventy thousand six")
  });
  it('returns words for numerical inputs between 1000 and 999,999', function() {
    numberDictionary(706706).should.equal("seven hundred six thousand seven hundred six")
  });
  it('returns words for numerical inputs between 999,999 and 999,999,999', function() {
    numberDictionary(706706908).should.equal("seven hundred six million seven hundred six thousand nine hundred eight")
  });
  it('returns words for numerical inputs between 999,999,999 and 999,999,999,999', function() {
    numberDictionary(706706908876).should.equal("seven hundred six billion seven hundred six million nine hundred eight thousand eight hundred seventy six")
  });
    it('returns words for numerical inputs between 999,999,999 and 999,999,999,999', function() {
    numberDictionary(706706908876).should.equal("seven hundred six billion seven hundred six million nine hundred eight thousand eight hundred seventy six")
  });
    it('returns words for numerical inputs between 999,999,999 and 999,999,999,999', function() {
      numberDictionary(700000000006).should.equal("seven hundred billion six")
    });

  it('returns words for numerical inputs between 999,999,999 and 999,999,999,999', function() {
    numberDictionary(700700000050).should.equal("seven hundred billion seven hundred million fifty")
  });

  it('returns words for numerical inputs between 999,999,999,999 and 999,999,999,999,999', function() {
    numberDictionary(756756000756150).should.equal("seven hundred fifty six trillion seven hundred fifty six billion seven hundred fifty six thousand one hundred fifty")
  });

  it('returns an error message if the number is over 999 trillion', function() {
    numberDictionary(9000000000000000000000).should.equal("too high")
  });
});

describe('lenghOfNumber', function() {
  it('returns the exponent place to start calculating at', function() {
    lengthOfNumber(1000000).should.equal(2);
  });

  it('returns the exponent place to start calculating at', function() {
    lengthOfNumber(345000000000).should.equal(3);
  });

})

// describe('exponentCounter', function() {
//   it('returns the number of thousands places of the number', function() {
//     var counter = 0;
//      exponentCounter(1000).should.equal(2);
//    }); 
// });