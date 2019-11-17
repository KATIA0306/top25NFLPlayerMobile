//import mongoose to connect to your database.
const mongoose = require('mongoose');
//Assign your SChema instance from mongoose

//COnnect to your database by using a connection string, a options, 
// and a callback that takes an error argument.
mongoose.connect(process.env.CONNECTION_STRING);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
    console.log("Connection succeeded. Katya is good developer");
});

const data = [
    {
        "position": "QB",
        "team": "New England Patriots",
        "jerseyNumber": 12,
        "wonSuperBowl": true,
        "name": "Tom Brady"
    },
    {
        "position": "WR",
        "team": "Pittsburg Steelers",
        "jerseyNumber": 84,
        "wonSuperBowl": false,
        "name": "Antonio Brown"
    },
    {
        "position": "QB",
        "team": "Philadelphia Eagles",
        "jerseyNumber": 11,
        "wonSuperBowl": true,
        "name": "Carson Wentz"
    },
    {
        "position": "WR",
        "team": "Atlanta Falcons",
        "jerseyNumber": 11,
        "wonSuperBowl": false,
        "name": "Julio Jones"
    },
    {
        "position": "RB",
        "team": "Pittsburg Steelers",
        "jerseyNumber": 26,
        "wonSuperBowl": false,
        "name": "Leveon Bell"
    },
    {
        "position": "RB",
        "team": "Los Angeles Rams",
        "jerseyNumber": 30,
        "wonSuperBowl": false,
        "name": "Todd Gurley"
    },
    {
        "position": "DT",
        "team": "Los Angeles Rams",
        "jerseyNumber": 99,
        "wonSuperBowl": false,
        "name": "Aaron Donald"
    },
    {
        "position": "QB",
        "team": "New Orleans Saints",
        "jerseyNumber": 9,
        "wonSuperBowl": true,
        "name": "Drew Brees"
    },
    {
        "position": "LB",
        "team": "Denver Broncos",
        "jerseyNumber": 58,
        "wonSuperBowl": true,
        "name": "Von Miller"
    },
    {
        "position": "QB",
        "team": "Green Bay Packers",
        "jerseyNumber": 12,
        "wonSuperBowl": true,
        "name": "Aaron Rodgers"
    },
    {
        "position": "DE",
        "team": "Chicago Bears",
        "jerseyNumber": 52,
        "wonSuperBowl": false,
        "name": "Khalil Mack"
    },
    {
        "position": "CB",
        "team": "Jacksonville Jaguars",
        "jerseyNumber": 20,
        "wonSuperBowl": false,
        "name": "Jalen Ramsey"
    },
    {
        "position": "DE",
        "team": "Minnesota Vikings",
        "jerseyNumber": 97,
        "wonSuperBowl": false,
        "name": "Everson Griffin"
    },
    {
        "position": "QB",
        "team": "Seattle Seahawks",
        "jerseyNumber": 3,
        "wonSuperBowl": true,
        "name": "Russell Wilson"
    },
    {
        "position": "WR",
        "team": "Houston Texans",
        "jerseyNumber": 10,
        "wonSuperBowl": false,
        "name": "DeAndre Hopkins"
    },
    {
        "position": "DE",
        "team": "Jacksonville Jaguars",
        "jerseyNumber": 93,
        "wonSuperBowl": false,
        "name": "Calias Campbell"
    },
    {
        "position": "RB",
        "team": "New Orleans Saints",
        "jerseyNumber": 41,
        "wonSuperBowl": false,
        "name": "Alvin Kamara"
    },
    {
        "position": "TE",
        "team": "Kansas City Chiefs",
        "jerseyNumber": 87,
        "wonSuperBowl": false,
        "name": "Travis Kelce"
    },
    {
        "position": "WR",
        "team": "Cincinatti Bengals",
        "jerseyNumber": 18,
        "wonSuperBowl": false,
        "name": "A.J Green"
    },
    {
        "position": "WR",
        "team": "Kansas City Chiefs",
        "jerseyNumber": 10,
        "wonSuperBowl": false,
        "name": "Tyreek Hill"
    },
    {
        "position": "LB",
        "team": "Carolina Panthers",
        "jerseyNumber": 59,
        "wonSuperBowl": false,
        "name": "Luke Kuechly"
    },
    {
        "position": "WR",
        "team": "Los Angeles Chargers",
        "jerseyNumber": 13,
        "wonSuperBowl": false,
        "name": "Keenan Allen"
    },
    {
        "position": "RB",
        "team": "Dallas Cowboys",
        "jerseyNumber": 21,
        "wonSuperBowl": false,
        "name": "Ezekiel Elliot"
    },
    {
        "position": "RB",
        "team": "Kansas City Chiefs",
        "jerseyNumber": 27,
        "wonSuperBowl": false,
        "name": "Kareem Hunt"
    },
    {
        "position": "QB",
        "team": "Kansas City Chiefs",
        "jerseyNumber": 15,
        "wonSuperBowl": false,
        "name": "Patrick Mahomes"
    }
]


const playerSchema = new mongoose.Schema({
    position: String,
    name: String,
    team: String,
    jerseyNumber: Number,
    wonSuperBowl: Boolean
});

const Player = mongoose.model("Player", playerSchema);

Player.countDocuments((err, players) => {
    if (err) return console.error(error)
    if (!players) {
        data.forEach(({ position, name, team, jerseyNumber, wonSuperBowl }) => {
            return NewPlayer = new Player({
                position,
                name,
                team,
                jerseyNumber,
                wonSuperBowl
            }).save(function (error) {
                console.log("Your player has been saved!");
                if (error) {
                    console.error(error);
                }
            });
        });
    }
})

module.exports = mongoose.model('Player', playerSchema);