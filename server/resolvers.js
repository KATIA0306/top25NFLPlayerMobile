const Player = require('./connectors');

const resolvers = {
    Query: {
        players: () => Player.find({}, (error, players) => {
           
            if(error) throw new Error(error);
            return players;
        }),
        getPlayer: (_, args) => Player.findById({_id: args.id}, async (error, playerToReturn) => {
            if(error) throw new Error(error);
            return await playerToReturn;
        })
    },
    Mutation: {
        createPlayer:(_, args) => {
            const newPlayer = new Player({
                position: args.position,
                name: args.name,
                team: args.team,
                jerseyNumber: args.jerseyNumber,
                wonSuperBowl: args.wonSuperBowl
            });
            newPlayer.save();

            return newPlayer;
        },
        updatePlayer: (_, args) => {
            return Player.findByIdAndUpdate({_id: args.id}, {$set: args}, async (error, updatedPlayer) => {
                if (error) {
                    throw new Error(error);
                }
                return await updatedPlayer;
            });
        },
        deletePlayer: (_, args) => {
            return Player.findByIdAndDelete({_id: args.id}, (error, playerDeleted) => {
                if(error) {
                    throw new Error(error);
                    
                }
                return;
            });
        }
    }
}

module.exports = resolvers;