const { gql } = require('apollo-server');

//Define your type definitions
const typeDefs = gql`
    type Query {
        players: [Player]
        getPlayer(id: String): Player
    }
    type Mutation {
        createPlayer(position: String, name: String, team: String, jerseyNumber: String, wonSuperBowl: Boolean): Player
        updatePlayer(id: String, position: String, name: String, team: String, jerseyNumber: String, wonSuperBowl: Boolean): Player
        deletePlayer(id: String): Player
    }
    type Player {
        id: String
        position: String
        name: String
        team: String
        jerseyNumber: String
        wonSuperBowl: Boolean
    }
    schema {
        query: Query
        mutation: Mutation
    }
`;

module.exports = typeDefs;