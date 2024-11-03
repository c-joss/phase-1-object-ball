function gameObject() {
    return {
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson": {
                Number: 0,
                Shoe: 16,
                Points: 22,
                Rebounds: 12,
                Assists: 12,
                Steals: 3,
                Blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans": {
                Number: 30,
                Shoe: 14,
                Points: 12,
                Rebounds: 12,
                Assists: 12,
                Steals: 12,
                Blocks: 12,
                slamDunks: 7
            },
            "Brook Lopez": {
                Number: 11,
                Shoe: 17,
                Points: 17,
                Rebounds: 19,
                Assists: 10,
                Steals: 3,
                Blocks: 1,
                slamDunks: 15
            },
            "Mason Plumlee": {
                Number: 1,
                Shoe: 19,
                Points: 26,
                Rebounds: 12,
                Assists: 6,
                Steals: 3,
                Blocks: 8,
                slamDunks: 5
            },
            "Jason Terry": {
                Number: 31,
                Shoe: 15,
                Points: 19,
                Rebounds: 2,
                Assists: 2,
                Steals: 4,
                Blocks: 11,
                slamDunks: 1
            }
        }
    },
    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
            "Jeff Adrien": {
                Number: 4,
                Shoe: 18,
                Points: 10,
                Rebounds: 1,
                Assists: 1,
                Steals: 2,
                Blocks: 7,
                slamDunks: 2
            },
            "Bismark Biyombo": {
                Number: 0,
                Shoe: 16,
                Points: 12,
                Rebounds: 4,
                Assists: 7,
                Steals: 7,
                Blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                Number: 2,
                Shoe: 14,
                Points: 24,
                Rebounds: 12,
                Assists: 12,
                Steals: 4,
                Blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                Number: 8,
                Shoe: 15,
                Points: 33,
                Rebounds: 3,
                Assists: 2,
                Steals: 1,
                Blocks: 1,
                slamDunks: 0
            },
            "Brendan Haywood": {
                Number: 33,
                Shoe: 15,
                Points: 6,
                Rebounds: 12,
                Assists: 12,
                Steals: 22,
                Blocks: 5,
                slamDunks: 12
            }
        }
    }
};
}

console.log(gameObject());


function numPointsScored(playerName) {
    const game = gameObject(); 
  
    for (let gameKey in game) {
      const players = game[gameKey].players;
  
      if (players[playerName]) {
        return players[playerName].Points;
      }
    }
}

console.log(numPointsScored("Brendan Haywood"));

function shoeSize(playerName) {
    const game = gameObject(); 
  
    for (let gameKey in game) {
      const players = game[gameKey].players;
  
      if (players[playerName]) {
        return players[playerName].Shoe;
      }
    }
}

console.log(shoeSize("Ben Gordon"));

function teamColors(team) {
    const game = gameObject();

    for (let gameKey in game) {
        const teamData = game[gameKey];

        if (teamData.teamName === team) {
            return teamData.colors;
        }
    }
}

console.log(teamColors("Charlotte Hornets"));

function teamNames() {
    const game = gameObject();
    const names = [];
    
    for (let gameKey in game) {
        const teamData = game[gameKey];
        names.push(teamData.teamName);
    }

    return names;
}

console.log(teamNames());


function playerNumbers(team) {
    const game = gameObject();
    const jerseyNumbers = [];

    for (let gameKey in game) {
        const teamData = game[gameKey];

        if (teamData.teamName === team) {
            for (let player in teamData.players) {
                jerseyNumbers.push(teamData.players[player].Number);
            }
            return jerseyNumbers;
        } 
    }
}

console.log(playerNumbers("Brooklyn Nets"));


function playerStats(playerName) {
    const game = gameObject();

    for (let gameKey in game) {
        const players = game[gameKey].players;

        if (players[playerName]) {
            return players[playerName];
        }
        return stats;
    }
}

console.log(playerStats("Alan Anderson"));

function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;

    for (let team in game) {
        for (let player in game[team].players) {
            let playerData = game[team].players[player];
            if (playerData.Shoe > largestShoeSize) {
                largestShoeSize = playerData.Shoe;
                rebounds = playerData.Rebounds;
            }
        }
    }
    return rebounds;
}

console.log(bigShoeRebounds());

function mostPointsScored () {
    const game = gameObject();
    let pointsScored = 0;
    let topScorer = "";

    for (let team in game) {
        for (let player in game[team].players) {
            let playerData = game[team].players[player];
            if (playerData.Points > pointsScored) {
                pointsScored = playerData.Points;
                topScorer = player;
            }
        }
    }
    return topScorer;
}

console.log(mostPointsScored());

function winningTeam() {
    const game = gameObject();
    let maxPoints = 0;
    let topTeam = "";

    for (let team in game) {
        let teamPoints = 0;

        for (let player in game[team].players) {
            teamPoints += game[team].players[player].Points;
        }
            if (teamPoints > maxPoints) {
                maxPoints = teamPoints;
                topTeam = game[team].teamName;
            }
        }
        return topTeam;
}

console.log(winningTeam());


function playerWithLongestName() {
    const game = gameObject();
    let charNum = 0;
    let longestNames = [];

    for (let team in game) {
        for (let player in game[team].players) {
            const nameLength = player.length;
        if (nameLength > charNum) {
            charNum = nameLength;
            longestNames = [player];
        }

        else if (nameLength === charNum) {
            longestNames.push(player);
        }
    }

    }
    return longestNames;

}

console.log(playerWithLongestName());

function doesLongNameStealATon() {
    const game = gameObject();
    let playerWithLongName = playerWithLongestName();
    let stealScored = 0;
    let topSteals = "";

    for (let team in game) {
        for (let player in game[team].players) {
            const steals = game[team].players[player].Steals;
            if (steals > stealScored) {
                stealScored = steals;
                topSteals = player;
            }
        }

        }
        return playerWithLongName.includes(topSteals);

}

console.log(doesLongNameStealATon());

