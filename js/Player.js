class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.index = null;

    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",(data)=>{
            playerCount = data.val();
        })
    }

    update(){
        var playerIndex = "players/player"+ this.index;
        database.ref(playerIndex).set({
            name : this.name,
            distance : this.distance
        })

    }

    static getPlayerInfo(){
        var playerInfo = database.ref("players");
        playerInfoRef.on("value",(data) => {
            allPlayers = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
      
    }

}