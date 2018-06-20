class BlindEternities{


    public map:object[][] = [];
    public constructor(){

    }

    public shuffle(cards)
    {
        let shuffledDeck:object[] = [];
        while(cards.length>0)
        {
            let index = Math.floor(Math.random() * cards.length);
            shuffledDeck.push(cards.splice(index,1)[0])
        }

        return shuffledDeck;
    }

    public fillUpNulls(cards)
    {
        //console.log(this)
        //console.log(cards);
        if(this.map[1][2]===null)
        {
            this.map[1][2] = cards.shift();
        }
        if(this.map[2][1]===null)
        {
            this.map[2][1] = cards.shift();
        }
        if(this.map[2][2]===null)
        {
            this.map[2][2] = cards.shift();
        }
        if(this.map[2][3]===null)
        {
            this.map[2][3] = cards.shift();
        }
        if(this.map[3][2]===null)
        {
            this.map[3][2] = cards.shift();
        }
    }

    public removedToPlanes(removed)
    {
        if(removed !==null)
        {
            planes.push(removed);
        }
    }

    public goLeft(cards)
    {
        this.map.forEach(function (row:object[]) {
            row.unshift(null);
            let removed = row.pop();
            if(removed !==null)
            {
                cards.push(removed);
            }
        });

    }

    public goRight(cards)
    {
        this.map.forEach(function (row:object[]) {
            row.push(null);
            let removed = row.shift();
            if(removed !==null)
            {
                cards.push(removed);
            }
        });

    }

    public goUp(cards)
    {
        this.map.unshift([null,null,null,null,null]);
        let row:any[] = this.map.pop();
        row.forEach(function (removed) {
            if(removed !==null)
            {
                cards.push(removed);
            }
        });

    }

    public goDown(cards)
    {
        this.map.push([null,null,null,null,null]);
        let row:any[] = this.map.shift();
        row.forEach(function (removed) {
            if(removed !==null)
            {
                cards.push(removed);
            }
        });
    }

    public goUpLeft(cards)
    {
        this.goUp(cards);
        this.goLeft(cards);
    }

    public goUpRight(cards)
    {
        this.goUp(cards);
        this.goRight(cards);
    }

    public goDownRight(cards)
    {
        this.goDown(cards);
        this.goRight(cards);
    }

    public goDownLeft(cards)
    {
        this.goDown(cards);
        this.goLeft(cards);
    }

    public start(cards)
    {
        this.map.push([null,null,null,null,null]);
        this.map.push([null,null,cards.shift(),null,null]);
        this.map.push([null,cards.shift(),cards.shift(),cards.shift(),null]);
        this.map.push([null,null,cards.shift(),null,null]);
        this.map.push([null,null,null,null,null]);

    }
}