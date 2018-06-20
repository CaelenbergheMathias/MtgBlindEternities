var BlindEternities = /** @class */ (function () {
    function BlindEternities() {
        this.map = [];
    }
    BlindEternities.prototype.shuffle = function (cards) {
        var shuffledDeck = [];
        while (cards.length > 0) {
            var index = Math.floor(Math.random() * cards.length);
            shuffledDeck.push(cards.splice(index, 1)[0]);
        }
        return shuffledDeck;
    };
    BlindEternities.prototype.fillUpNulls = function (cards) {
        //console.log(this)
        //console.log(cards);
        if (this.map[1][2] === null) {
            this.map[1][2] = cards.shift();
        }
        if (this.map[2][1] === null) {
            this.map[2][1] = cards.shift();
        }
        if (this.map[2][2] === null) {
            this.map[2][2] = cards.shift();
        }
        if (this.map[2][3] === null) {
            this.map[2][3] = cards.shift();
        }
        if (this.map[3][2] === null) {
            this.map[3][2] = cards.shift();
        }
    };
    BlindEternities.prototype.removedToPlanes = function (removed) {
        if (removed !== null) {
            planes.push(removed);
        }
    };
    BlindEternities.prototype.goLeft = function (cards) {
        this.map.forEach(function (row) {
            row.unshift(null);
            var removed = row.pop();
            if (removed !== null) {
                cards.push(removed);
            }
        });
    };
    BlindEternities.prototype.goRight = function (cards) {
        this.map.forEach(function (row) {
            row.push(null);
            var removed = row.shift();
            if (removed !== null) {
                cards.push(removed);
            }
        });
    };
    BlindEternities.prototype.goUp = function (cards) {
        this.map.unshift([null, null, null, null, null]);
        var row = this.map.pop();
        row.forEach(function (removed) {
            if (removed !== null) {
                cards.push(removed);
            }
        });
    };
    BlindEternities.prototype.goDown = function (cards) {
        this.map.push([null, null, null, null, null]);
        var row = this.map.shift();
        row.forEach(function (removed) {
            if (removed !== null) {
                cards.push(removed);
            }
        });
    };
    BlindEternities.prototype.goUpLeft = function (cards) {
        this.goUp(cards);
        this.goLeft(cards);
    };
    BlindEternities.prototype.goUpRight = function (cards) {
        this.goUp(cards);
        this.goRight(cards);
    };
    BlindEternities.prototype.goDownRight = function (cards) {
        this.goDown(cards);
        this.goRight(cards);
    };
    BlindEternities.prototype.goDownLeft = function (cards) {
        this.goDown(cards);
        this.goLeft(cards);
    };
    BlindEternities.prototype.start = function (cards) {
        this.map.push([null, null, null, null, null]);
        this.map.push([null, null, cards.shift(), null, null]);
        this.map.push([null, cards.shift(), cards.shift(), cards.shift(), null]);
        this.map.push([null, null, cards.shift(), null, null]);
        this.map.push([null, null, null, null, null]);
    };
    return BlindEternities;
}());
