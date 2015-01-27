var Bowling = function(){
	this.accumulatedScore = 0;
	this.pinsLeft = 10;
	this.originalPins = 10;
	this.ballsBowled = 0;
};

Bowling.prototype.pinsKnockedDown = function(number) {
	this.pinsLeft = this.pinsLeft - number;
	this.ballsBowled += 1;
	this.completeTurn;
};

Bowling.prototype.completeTurn = function(){
		if(this.pinsLeft === 0) {
			this.addScore;
			this.nextRound;
		}
		else if(this.ballsBowled === 2) {
			this.addScore;
			this.nextRound;
		}
		else {
			return false
		};
};

Bowling.prototype.isNextTurn = function() {
	if(this.pinsLeft === 0){
		return true
	}
	else if(this.ballsBowled === 2){
		return true
	}
	else {
		return false
	};
};

Bowling.prototype.addScore = function() {
	this.accumulatedScore += (this.originalPins-this.pinsLeft)
};

Bowling.prototype.nextRound = function() {
	this.pinsLeft = 10;
	this.ballsBowled = 2;
};