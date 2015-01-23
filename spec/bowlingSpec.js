describe ("Bowling", function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });
    
  describe("by default", function() {

    it("has an accumulated score that starts at 0", function() {
      expect(bowling.accumulatedScore).toEqual(0);
    });

    it("knows how many pins there are, starting at 10", function() {
    	expect(bowling.pinsLeft).toEqual(10);
    });

  });

  describe("when playing each turn", function() {

  	it("knows how many pins have been knocked down on the first go", function() {
  		bowling.pinsKnockedDown(5);
  		expect(bowling.pinsLeft).toEqual(5);
  	});

  	it("knows that the turn is over if 10 pins have been knocked down", function() {
  		bowling.pinsKnockedDown(10);
  		expect(bowling.isNextTurn()).toBe(true);
  	});

  	it("records the score from that turn once go is over", function() {
  		bowling.pinsKnockedDown(5);
  		bowling.addScore();
  		expect(bowling.accumulatedScore).toEqual(5);
  	});

  	it("knows that the turn is over when 2 balls have been bowled", function() {
  		bowling.pinsKnockedDown(2);
  		bowling.pinsKnockedDown(3);
  		expect(bowling.isNextTurn()).toBe(true);
  	});

  	it("")

  });

});