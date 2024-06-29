document.addEventListener("DOMContentLoaded", function () {
    const players = window.players;
    const matches = window.matches;
    const teams = window.teams
    let totalGamesCategory, totalGoalsCategory, totalSlingersCategory, totalAssistsCategory, mostAppsCategory, mostWinsCategory, mostCleanSheetsCategory, mostMOTMCategory, mostPointsCategory, mostDefeatsCategory;

    function finalTotalMatches(matches) {
        let totalMatches = 0;
        matches.forEach(match => {
            totalMatches += 1;
        });
        return totalMatches;
    }

    function findNumberYellows(matches, yellow) {
        const bigYellow = parseInt(yellow)
        let totalYellows = 0

        for (const match of matches) {
            for (const player of match.yellows) {
                totalYellows++

                if (totalYellows === bigYellow) {
                    return `${player} (${match.date})`
                }
            }
        }
    }

    function findNumberReds(matches, red) {
        const bigRed = parseInt(red)
        let totalReds = 0

        for (const match of matches) {
            for (const player of match.reds) {
                totalReds++

                if (totalReds === bigRed) {
                    return `${player} (${match.date})`
                }
            }
        }
    }

    function findNumberSlingers(matches, slingers) {
        const bigSlingers = parseInt(slingers)
        let totalSlingers = 0

        for (const match of matches) {
            for (const player of match.slingers) {
                totalSlingers++

                if (bigSlingers === totalSlingers) {
                    return `${player} (${match.date})`
                }
            }
        }
    }

    function findNumberGoals(matches, goals) {
        const bigGoals = parseInt(goals);
        let totalGoals = 0;
    
        for (const match of matches) {
            for (const player of match.scorers) {
                totalGoals++;
    
                if (totalGoals === bigGoals) {
                    return `${player} (${match.date})`;
                }
            }
        }
    
        return `Not yet occured`; // Return null if goal number is out of range
    }

    function findNumberAssists(matches, assists) {
        const bigAssists = parseInt(assists);
        let totalAssists = 0;

        for (const match of matches) {
            for (const player of match.assisters) {
                totalAssists++

                if (totalAssists === bigAssists) {
                    return `${player} (${match.date})`
                }
            }
        }
    }

    function findTotalNumberOfGoals(matches) {
        let totalGoals = 0;
    
        // Iterate over each match
        for (const match of matches) {
            // Add the length of scorers array to totalGoals
            totalGoals += match.scorers.length;
        }
    
        return totalGoals;
    }
    
    function findNumberGame(matches, game) {
        const gameNumber = parseInt(game)
        totalGames = 0;

        for (const match of matches) {
            totalGames++

            if (totalGames === gameNumber) {
                return `${match.date} at ${match.time}`
            }
        }

        return null
    }


    function finalTotalSlingers(matches) {
        let totalSlingers = 0;
        matches.forEach(match => {
            totalSlingers += match.slingers.length;
        });
        return totalSlingers;
    }

    function finalTotalGoals(matches) {
        let totalGoals = 0;
        matches.forEach(match => {
            totalGoals += match.team1_score + match.team2_score;
        });
        return totalGoals;
    }

    function finalTotalAssists(matches) {
        let totalAssists = 0;
        matches.forEach(match => {
            totalAssists += match.assisters.length;
        });
        return totalAssists;
    }

    function findTotalYellows(matches) {
        let totalYellows = 0;
        matches.forEach(match => {
            totalYellows += match.yellows.length
        });
        return totalYellows;
    }

    function findTotalReds(matches) {
        let totalReds = 0;
        matches.forEach(match => {
            totalReds += match.reds.length
        })
        return totalReds;
    }

    function findPlayerWithMostTotalApps(players) {
        let mostAppsPlayers = [];
        let maxOverallApps = -1;
    
        players.forEach(player => {
            let overallApps = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.apps !== 'undefined') {
                overallApps = overallMonth.apps;
            }
    
            if (overallApps > maxOverallApps) {
                maxOverallApps = overallApps;
                mostAppsPlayers = [player.name];
            } else if (overallApps === maxOverallApps) {
                mostAppsPlayers.push(player.name);
            }
        });
    
        return { players: mostAppsPlayers, overallApps: maxOverallApps };
    }

    function findPlayersWithMostAssists(players) {
        let mostAssistsPlayers = [];
        let maxOverallAssists = -1;
    
        players.forEach(player => {
            let overallAsssists = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.assists !== 'undefined') {
                overallAsssists = overallMonth.assists;
            }
    
            if (overallAsssists > maxOverallAssists) {
                maxOverallAssists = overallAsssists;
                mostAssistsPlayers = [player.name];
            } else if (overallAsssists === maxOverallAssists) {
                mostAssistsPlayers.push(player.name);
            }
        });
    
        return { players: mostAssistsPlayers, overallAsssists: maxOverallAssists };
    }

    function findPlayerWithMostWins(players) {
        let mostWinsPlayer = null;
        let maxOverallWins = -1;
        players.forEach(player => {
            let overallWins = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
            if (overallMonth && typeof overallMonth.won !== 'undefined') {
                overallWins = overallMonth.won;
            }
            if (overallWins > maxOverallWins) {
                maxOverallWins = overallWins;
                mostWinsPlayer = player.name;
            }
        });
        return { player: mostWinsPlayer, overallWins: maxOverallWins };
    }

    function findPlayersWithMostCleanSheets(players) {
        let mostCleanSheetsPlayers = [];
        let maxOverallCleanSheets = -1;
    
        players.forEach(player => {
            let overallCleanSheets = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.clean_sheets !== 'undefined') {
                overallCleanSheets = overallMonth.clean_sheets;
            }
    
            if (overallCleanSheets > maxOverallCleanSheets) {
                maxOverallCleanSheets = overallCleanSheets;
                mostCleanSheetsPlayers = [player.name];
            } else if (overallCleanSheets === maxOverallCleanSheets) {
                mostCleanSheetsPlayers.push(player.name);
            }
        });
    
        return { players: mostCleanSheetsPlayers, overallCleanSheets: maxOverallCleanSheets };
    }

    function findPlayersWithMostMOTM(players) {
        let mostMOTMPlayers = [];
        let maxOverallMOTM = -1;

        players.forEach(player => {
            let overallMOTM = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.motm !== 'undefined') {
                overallMOTM = overallMonth.motm
            }

            if (overallMOTM > maxOverallMOTM) {
                maxOverallMOTM = overallMOTM;
                mostMOTMPlayers = [player.name];
            } else if (overallMOTM === maxOverallMOTM) {
                mostMOTMPlayers.push(player.name)
            }

        })

        return { players: mostMOTMPlayers, overallMOTM: maxOverallMOTM}
    }

    function findPlayersWithMostPoints(teams) {
        let mostPointsPlayers = [];
        let maxOverallPoints = -1;
    
        teams.forEach(team => {
            let overallPoints = 0;
            const overallMonth = team.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.points !== 'undefined') {
                overallPoints = overallMonth.points;
            }
    
            if (overallPoints > maxOverallPoints) {
                maxOverallPoints = overallPoints;
                mostPointsPlayers = [team.name];
            } else if (overallPoints === maxOverallPoints) {
                mostPointsPlayers.push(team.name);
            }
        });
    
        return { teams: mostPointsPlayers, overallPoints: maxOverallPoints };
    }
    
    function findPlayersWithMostDefeats() {
        let mostDefeatsPlayers = [];
        let maxOverallDefeats = -1;

        teams.forEach(team => {
            let overallDefeats = 0;
            const overallMonth = team.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.losses !== 'undefined') {
                overallDefeats = overallMonth.losses
            }

            if (overallDefeats > maxOverallDefeats) {
                maxOverallDefeats = overallDefeats;
                mostDefeatsPlayers = [team.name];
            } else if (overallDefeats === maxOverallDefeats) {
                mostDefeatsPlayers.push(team.name)
            }
        })

        return { teams: mostDefeatsPlayers, overallDefeats: maxOverallDefeats}
    }

    function findPlayersWithMostYellowsInMonth(players) {
        let playerYellowsByMonth = {};
    
        players.forEach(player => {
            player.monthlyData.forEach(({ month, yellow }) => {
                month = month.toLowerCase();
                if (month !== "overall") { // Skip "Overall" month
                    if (!playerYellowsByMonth[month]) {
                        playerYellowsByMonth[month] = [];
                    }
                    playerYellowsByMonth[month].push({ playerName: player.name, yellow });
                }
            });
        });
    
        let mostYellows = 0;
        const topMonths = [];
    
        Object.entries(playerYellowsByMonth).forEach(([month, players]) => {
            const maxYellows = Math.max(...players.map(player => player.yellow));
            if (maxYellows > mostYellows) {
                mostYellows = maxYellows;
                topMonths.length = 0;
                topMonths.push({ month, players: players.filter(player => player.yellow === maxYellows) });
            } else if (maxYellows === mostYellows) {
                topMonths.push({ month, players: players.filter(player => player.yellow === maxYellows) });
            }
        });
    
        if (mostYellows > 0) {
            const result = `${mostYellows} - ${topMonths.map(({ month, players }) => {
                const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
                return players.map(player => `${player.playerName} (${capitalizedMonth})`).join(', ');
            }).join(', ')}`;
            return result;
        } else {
            return "No player has monthly yellow card data excluding 'Overall'.";
        }
    }


    function findPlayersWithMostRedsInMonth(players) {
        let playerRedsByMonth = {};
    
        players.forEach(player => {
            player.monthlyData.forEach(({ month, red }) => {
                month = month.toLowerCase();
                if (month !== "overall") { // Skip "Overall" month
                    if (!playerRedsByMonth[month]) {
                        playerRedsByMonth[month] = [];
                    }
                    playerRedsByMonth[month].push({ playerName: player.name, red });
                }
            });
        });

        console.log(playerRedsByMonth)
    
        let mostReds = 0;
        const topMonths = [];
    
        Object.entries(playerRedsByMonth).forEach(([month, players]) => {
            const maxReds = Math.max(...players.map(player => player.red));
            if (maxReds > mostReds) {
                mostReds = maxReds;
                topMonths.length = 0;
                topMonths.push({ month, players: players.filter(player => player.red === maxReds) });
            } else if (maxReds === mostReds) {
                topMonths.push({ month, players: players.filter(player => player.red === maxReds) });
            }
        });
    
        if (mostReds > 0) {
            const result = `${mostReds} - ${topMonths.map(({ month, players }) => {
                const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
                return players.map(player => `${player.playerName} (${capitalizedMonth})`).join(', ');
            }).join(', ')}`;
            return result;
        } else {
            return "No player has monthly yellow card data excluding 'Overall'.";
        }
    }
    
    



    function findPlayersWithLeastYellows(players) {
        let leastYellowPlayer = [];
        let maxOverallYellow = Infinity;

        players.forEach(player => {
            let overallYellow = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
            overallYellow = overallMonth.yellow

            

            if (overallYellow < maxOverallYellow) {
                maxOverallYellow = overallYellow
                leastYellowPlayer = [player.name]
            } else if (overallYellow === maxOverallYellow) {
                leastYellowPlayer.push(player.name)
            }

        })

        return maxOverallYellow + ' - ' + leastYellowPlayer.join(', ')

    }


    findPlayersWithLeastYellows(players)






    function findPlayersWithMostAppsInMonth(players) {
        const playerAppsByMonth = {};
    
        // Collect player appearances by month
        players.forEach(player => {
            player.monthlyData.forEach(({ month, apps }) => {
                month = month.toLowerCase();
                if (month !== "overall") {
                    if (!playerAppsByMonth[month]) {
                        playerAppsByMonth[month] = [];
                    }
                    playerAppsByMonth[month].push({ playerName: player.name, apps });
                }
            });
        });

        console.log('playres apps by month tester', playerAppsByMonth)
    
        // Determine the maximum number of appearances and track relevant players and months
        let mostApps = 0;
        const topMonths = [];
    
        Object.entries(playerAppsByMonth).forEach(([month, players]) => {
            const maxApps = Math.max(...players.map(player => player.apps));
            console.log('the maximum apps is', maxApps)
            if (maxApps > mostApps) {
                mostApps = maxApps;
                topMonths.length = 0; // Reset the array
                topMonths.push({ month, players: players.filter(player => player.apps === maxApps) });
            } else if (maxApps === mostApps) {
                topMonths.push({ month, players: players.filter(player => player.apps === maxApps) });
            }
        });
    
        // Format the result
        if (mostApps > 0) {
            const result = `${mostApps} - ${topMonths.map(({ month, players }) => {
                const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);
                return players.map(player => `${player.playerName} (${capitalizedMonth})`).join(', ');
            }).join('; ')}`;
            return result;
        } else {
            return "No player has monthly appearance data excluding 'Overall'.";
        }
    }


    function findPlayersWithMostAssistsInMonth(players) {
        const playerAssistsByMonth = {}

        players.forEach(player => {
            player.monthlyData.forEach(({ month, assists }) => {
                month = month.toLowerCase();
                if (month !== "overall") {
                    if (!playerAssistsByMonth[month]) {
                        playerAssistsByMonth[month] = []
                    }
                    playerAssistsByMonth[month].push({ playerName: player.name, assists})
                }
            })
        })

        let mostAssists = 0
        let topMonth = ""
        let topPlayers = []

        Object.entries(playerAssistsByMonth).forEach(([month, players]) => {
            const maxAssists = Math.max(...players.map(player => player.assists))
            if (maxAssists > mostAssists) {
                mostAssists = maxAssists
                topMonth = month
                topPlayers = players.filter(player => player.assists === maxAssists)
            } else if(maxAssists === mostAssists) {
            topPlayers.push(...players.filter(player => player.assists === maxAssists));

            }
        })
    
        if (mostAssists > 0) {
            const capitalizedMonth = topMonth.charAt(0).toUpperCase() + topMonth.slice(1);
            return `${mostAssists} - ${topPlayers.map(player => `${player.playerName} (${capitalizedMonth})`).join(', ')}`;
        } else {
            return "No player has monthly goal data excluding 'Overall'.";
        }
    
    }
    
    


    function findPlayersWithMostGoalsInMonth(players) {
        const playerGoalsByMonth = {};
    
        // Collect player goals by month
        players.forEach(player => {
            player.monthlyData.forEach(({ month, goals }) => {
                month = month.toLowerCase();
                if (month !== "overall") {
                    if (!playerGoalsByMonth[month]) {
                        playerGoalsByMonth[month] = [];
                    }
                    playerGoalsByMonth[month].push({ playerName: player.name, goals });
                }
            });
        });
    
        // Determine the month with the most goals and the players with those goals
        let mostGoals = 0;
        let topMonth = "";
        let topPlayers = [];
    
        Object.entries(playerGoalsByMonth).forEach(([month, players]) => {
            const maxGoals = Math.max(...players.map(player => player.goals));
            if (maxGoals > mostGoals) {
                mostGoals = maxGoals;
                topMonth = month;
                topPlayers = players.filter(player => player.goals === maxGoals);
            } else if (maxGoals === mostGoals) {
                topPlayers.push(...players.filter(player => player.goals === maxGoals));
            }
        });
    
        if (mostGoals > 0) {
            const capitalizedMonth = topMonth.charAt(0).toUpperCase() + topMonth.slice(1);
            return `${mostGoals} - ${topPlayers.map(player => `${player.playerName} (${capitalizedMonth})`).join(', ')}`;
        } else {
            return "No player has monthly goal data excluding 'Overall'.";
        }
    }
   


    
    
    

    function findPlayersWithMostDraws() {
        let mostDrawsPlayers = [];
        let maxOverallDraws = -1;

        teams.forEach(team => {
            let overallDraws = 0;
            const overallMonth = team.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.draws !== 'undefined') {
                overallDraws = overallMonth.draws
            }

            if (overallDraws > maxOverallDraws) {
                maxOverallDraws = overallDraws;
                mostDrawsPlayers = [team.name];
            } else if (overallDraws === maxOverallDraws) {
                mostDrawsPlayers.push(team.name)
            }
        })

        return { teams: mostDrawsPlayers, overallDraws: maxOverallDraws}
    }

    function findPlayerWithLeastTotalApps(players) {
        let leastAppsPlayer = [];
        let minOverallApps = Infinity;
    
        players.forEach(player => {
            let overallApps = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.apps !== 'undefined') {
                overallApps = overallMonth.apps;
            }
    
            if (overallApps < minOverallApps) {
                minOverallApps = overallApps;
                leastAppsPlayer = [player.name];
            } else if (overallApps === minOverallApps) {
                leastAppsPlayer.push(player.name)
            }
        });
    
        return { player: leastAppsPlayer, overallApps: minOverallApps };
    }

    function findPlayersWithMostYellows(players) {
        let mostYellowPlayer = [];
        let maxOverallYellow = -1;

        players.forEach(player => {
            let overallYellow = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.yellow !== 'undefined') {
                overallYellow = overallMonth.yellow
            }

            if (overallYellow > maxOverallYellow) {
                maxOverallYellow = overallYellow
                mostYellowPlayer = [player.name]
            } else if (overallYellow === maxOverallYellow) {
                mostYellowPlayer.push(player.name)
            }

        })

        return {player: mostYellowPlayer, overallYellow: maxOverallYellow}
    }

    function findPlayersWithMostReds(players) {
        let mostRedPlayer = [];
        let maxOverallRed = -1;

        players.forEach(player => {
            let overallRed = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");

            if (overallMonth && typeof overallMonth.red !== 'undefined') {
                overallRed = overallMonth.red
            }

            if (overallRed > maxOverallRed) {
                maxOverallRed = overallRed
                mostRedPlayer = [player.name]
            } else if (overallRed === maxOverallRed) {
                mostRedPlayer.push(player.name)
            }

        })

        return {player: mostRedPlayer, overallRed: maxOverallRed}
    }

    function findPlayerWithMostSlingers(players) {
        let mostSlingerPlayer = [];
        let maxOverallSlinger = -1;
    
        players.forEach(player => {
            let overallSlinger = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.slingers !== 'undefined') {
                overallSlinger = overallMonth.slingers;
            }
    
            if (overallSlinger > maxOverallSlinger) {
                maxOverallSlinger = overallSlinger;
                mostSlingerPlayer = [player.name];
            } else if (overallSlinger === maxOverallSlinger) {
                mostSlingerPlayer.push(player.name);
            }
        });
    
        return { player: mostSlingerPlayer, overallSlinger: maxOverallSlinger };
    }

    function findPlayersWithMostGoals(players) {
        let mostGoalPlayer = [];
        let maxOverallGoal = -1;
    
        players.forEach(player => {
            let overallGoal = 0;
            const overallMonth = player.monthlyData.find(monthData => monthData.month === "Overall");
    
            if (overallMonth && typeof overallMonth.goals !== 'undefined') {
                overallGoal = overallMonth.goals;
            }
    
            if (overallGoal > maxOverallGoal) {
                maxOverallGoal = overallGoal;
                mostGoalPlayer = [player.name];
            } else if (overallGoal === maxOverallGoal) {
                mostGoalPlayer.push(player.name);
            }
        });
    
        return { player: mostGoalPlayer, overallGoal: maxOverallGoal };
    }
    

    function findPlayersWithMostGoalsInSingleGame(matches) {
    let topScorers = [];
let topGoalsInSingleGame = 0;

// Iterate through each match
matches.forEach(match => {
    // Combine goal scorers from both teams for the current match
    const allScorers = match.scorers;

    // Count goals for each scorer in the current match
    const scorerGoals = {};
    allScorers.forEach(scorer => {
        scorerGoals[scorer] = (scorerGoals[scorer] || 0) + 1;
    });

    // Find the player(s) with the most goals in the current match
    for (const scorer in scorerGoals) {
        if (scorerGoals[scorer] > topGoalsInSingleGame) {
            topScorers = [scorer];
            topGoalsInSingleGame = scorerGoals[scorer];
        } else if (scorerGoals[scorer] === topGoalsInSingleGame) {
            // If there are multiple players with the same highest goal count
            topScorers.push(scorer);
        }
    }
});
    return `${topGoalsInSingleGame} - ${topScorers.join(', ')}`
}

function findGameWithMostGoals(matches) {
let mostGoalsInSingleGame = 0;
let dateOfMostGoalsGame;
let timeOfMostGoalsGame;

// Iterate through each match
matches.forEach(match => {
    // Sum the scores of both teams in the current match
    const totalGoalsInMatch = match.team1_score + match.team2_score;

    // Update if the current match has more goals
    if (totalGoalsInMatch > mostGoalsInSingleGame) {
        mostGoalsInSingleGame = totalGoalsInMatch;
        dateOfMostGoalsGame = match.date;
        timeOfMostGoalsGame = match.time;
    }
});
    return `${mostGoalsInSingleGame} goals - ${dateOfMostGoalsGame} (${timeOfMostGoalsGame})`
}

function findMonthWithMostGames(matches) {
const matchesByMonth = {};

// Iterate through each match
matches.forEach(match => {
    const month = match.month.toLowerCase();

    // Update the match count for the current month
    matchesByMonth[month] = (matchesByMonth[month] || 0) + 1;
});

// Find the month with the most matches
let mostMatchesMonth;
let mostMatchesCount = 0;

for (const month in matchesByMonth) {
    if (matchesByMonth[month] > mostMatchesCount) {
        mostMatchesMonth = month;
        mostMatchesCount = matchesByMonth[month];
    }
}
    const capitalizedMonth = mostMatchesMonth.charAt(0).toUpperCase() + mostMatchesMonth.slice(1);

    return `${(mostMatchesCount)} - ${capitalizedMonth}`

}

function findPlayerWithMostPointsInMonth(teams) {
    const playerPoints = []; // Object to track total points for each player

    // Iterate through each team
    teams.forEach(team => {
        // Iterate through each month's data for the team
        team.monthlyData.forEach(monthData => {
            const month = monthData.month.toLowerCase();

            // Exclude "Overall" month
            if (month !== "overall") {
                const playerName = team.name;
                const points = monthData.points;

                // Update total points for the player
                if (!playerPoints[playerName] || points > playerPoints[playerName].points) {
                    playerPoints[playerName] = { points: points, month: month };
                }
            }
        });
    });

    let mostPointsPlayer;
    let mostPointsCount = 0;

    // Find the player with the most points
    for (const playerName in playerPoints) {
        if (playerPoints[playerName].points > mostPointsCount) {
            mostPointsPlayer = playerName;
            mostPointsCount = playerPoints[playerName].points;
        }
    }

    if (mostPointsPlayer) {
        const capitalizedMonth = playerPoints[mostPointsPlayer].month.charAt(0).toUpperCase() + playerPoints[mostPointsPlayer].month.slice(1);
        return `${mostPointsCount} - ${mostPointsPlayer} (${capitalizedMonth})`;
    } else {
        return "No player has monthly data excluding 'Overall'.";
    }
}




function findPlayersWithMostDefeatsInMonth(teams) {
    const playerDefeatsByMonth = {};

    // Iterate through each team
    teams.forEach(team => {
        // Iterate through each month's data for the team
        team.monthlyData.forEach(monthData => {
            const month = monthData.month.toLowerCase();

            // Exclude "Overall" month
            if (month !== "overall") {
                // Update the defeats for the current month
                const defeats = monthData.losses;
                if (!playerDefeatsByMonth[month]) {
                    // If the month entry does not exist, create it as an array
                    playerDefeatsByMonth[month] = [{ playerName: team.name, defeats: defeats }];
                } else if (defeats > playerDefeatsByMonth[month][0].defeats) {
                    // If a player has more defeats, replace the array with a new one
                    playerDefeatsByMonth[month] = [{ playerName: team.name, defeats: defeats }];
                } else if (defeats === playerDefeatsByMonth[month][0].defeats) {
                    // If multiple players have the same number of defeats, add them to the array
                    playerDefeatsByMonth[month].push({ playerName: team.name, defeats: defeats, month: team.month });
                }
            }
        });
    });

    // Find the month with the most defeats
    let mostDefeatsMonth;
    let mostDefeatsCount = 0;
    let topPlayers = [];

    for (const month in playerDefeatsByMonth) {
        const defeats = playerDefeatsByMonth[month][0].defeats;
        
        if (defeats > mostDefeatsCount) {
            mostDefeatsMonth = month;
            mostDefeatsCount = defeats;
            topPlayers = playerDefeatsByMonth[month];
        } else if (defeats === mostDefeatsCount) {
            // If multiple players have the same number of defeats, add them to the array
            topPlayers.push(...playerDefeatsByMonth[month]);
        }
    }

    if (mostDefeatsMonth) {
        const capitalizedMonth = mostDefeatsMonth.charAt(0).toUpperCase() + mostDefeatsMonth.slice(1);
        return [`${mostDefeatsCount} - ${topPlayers.map(player => `${player.playerName} (${capitalizedMonth})`).reverse().join(', ')}`];

    } else {
        return ["No player has monthly defeat data excluding 'Overall'."];
    }
}

function findMonthsWithMostGoals(matches) {
    const goalsByMonth = {};

    // Iterate through each match
    matches.forEach(match => {
        const month = match.month.toLowerCase();
        const goalsScored = match.team1_score + match.team2_score;

        // Update the goals count for the current month
        goalsByMonth[month] = (goalsByMonth[month] || 0) + goalsScored;
    });

    // Find the month(s) with the most goals scored
    let mostGoalsCount = 0;
    let topMonths = [];

    for (const month in goalsByMonth) {
        const goals = goalsByMonth[month];

        if (goals > mostGoalsCount) {
            mostGoalsCount = goals;
            topMonths = [month];
        } else if (goals === mostGoalsCount) {
            topMonths.push(month);
        }
    }

    const capitalizedMonths = topMonths.map(month => month.charAt(0).toUpperCase() + month.slice(1));

    return `${mostGoalsCount} - ${capitalizedMonths.join(', ')}`;

    
}





function findPlayersWithMostAssistsInSingleGame(matches) {
    let topAssisters = [];
let topAssistsInSingleGame = 0;

// Iterate through each match
matches.forEach(match => {
    // Combine goal scorers from both teams for the current match
    const allAssisters = match.assisters;

    // Count goals for each scorer in the current match
    const assistGame = {};
    allAssisters.forEach(assister => {
        assistGame[assister] = (assistGame[assister] || 0) + 1;
    });

    // Find the player(s) with the most goals in the current match
    for (const assister in assistGame) {
        if (assistGame[assister] > topAssistsInSingleGame) {
            topAssisters = [assister];
            topAssistsInSingleGame = assistGame[assister];
        } else if (assistGame[assister] === topAssistsInSingleGame) {
            // If there are multiple players with the same highest goal count
            topAssisters.push(assister);
        }
    }
});
    return `${topAssistsInSingleGame} - ${topAssisters.join(', ')}`
}

const findTotalHomeGames = (matches) => {
    let totalGoals = 0;

    matches.forEach(match => {
        totalGoals += match.team1_score
    })

    return totalGoals
}

const findTotalAwayGames = (matches) => {
    let totalGoals = 0;

    matches.forEach(match => {
        totalGoals += match.team2_score
    })

    return totalGoals
}






// Print the result    
    console.log(matches);
    console.log(players);
    console.log(teams)

    const awardsData = [
        {
            category: "player_of_the_month",
            headers: ["Player of the Month", ""],
            data: [
                { month: "January", winner: "Pele" },
                { month: "February", winner: "Russian Keeper"},
                { month: "March", winner: "Benzema"},
                { month: "April", winner: "Suarez"},
                { month: "May", winner: "De Bruyne"},
                { month: "June", winner: "Ongoing..."}
            ],
        },
        {
            category: "games",
            headers: ["Matches", ""],
            data: [
                { category: "1st Game", winner: findNumberGame(matches, 1) },
                { category: "10th Game", winner: findNumberGame(matches, 10)},
                { category: "50th Game", winner: findNumberGame(matches, 50) },
                { category: "75th Game", winner: findNumberGame(matches, 75) },
                { category: "100th Game", winner: findNumberGame(matches, 100) },
                { category: "Highest Scoring Game", winner: findGameWithMostGoals(matches) },
                { category: "Most Games in a Month", winner: findMonthWithMostGames(matches) },
                { category: "Most Points in a Month", winner: findPlayerWithMostPointsInMonth(teams) },
                { category: "Most Defeats in a Month", winner: findPlayersWithMostDefeatsInMonth(teams) },
                { category: "Most Goals in a Month", winner: findMonthsWithMostGoals(matches) }
            ],
        },
        {
            category: "goals",
            headers: ["Goals", ""],
            data: [
                { category: "Most Goals", winner: findPlayersWithMostGoals(players)},
                { category: "1st Goal", winner: findNumberGoals(matches, 1) },
                { category: "10th Goal", winner: findNumberGoals(matches, 10) },
                { category: "20th Gaol", winner: findNumberGoals(matches, 20)},
                { category: "50th Goal", winner: findNumberGoals(matches, 50)},
                { category: "100th Goal", winner: findNumberGoals(matches, 100)},
                { category: "150th Goal", winner: findNumberGoals(matches, 150)},
                { category: "200th Goal", winner: findNumberGoals(matches, 200) },
                { category: "250th Goal", winner: findNumberGoals(matches, 250)},
                { category: "1st Slinger", winner: findNumberSlingers(matches, 1) },
                { category: "10th Slinger", winner: findNumberSlingers(matches, 10)},
                { category: "25th Slinger", winner: findNumberSlingers(matches, 25)},
                { category: "Most Slingers", winner: findPlayerWithMostSlingers(players) },
                { category: "Most Goals in Single Game", winner: findPlayersWithMostGoalsInSingleGame(matches)},
                { category: "Most Goals in a Single Month", winner: findPlayersWithMostGoalsInMonth(players)}
            ],
        },
        {
            category: "assists",
            headers: ["Assists", ""],
            data: [
                { category: "Most Assists", winner: findPlayersWithMostAssists(players)},
                { category: "1st Assist", winner: findNumberAssists(matches, 1)},
                { category: "10th Assist", winner: findNumberAssists(matches, 10)},
                { category: "20th Assist:", winner: findNumberAssists(matches, 20)},
                { category: "50th Assist", winner: findNumberAssists(matches, 50)},
                { category: "100th Assist", winner: findNumberAssists(matches, 100)},
                { category: "150th Assist", winner: findNumberAssists(matches, 150)},
                { category: "Most Assists in Single Game", winner: findPlayersWithMostAssistsInSingleGame(matches)},
                { category: "Most Assists in Single Month", winner: findPlayersWithMostAssistsInMonth(players)}
            ],
        },
        {
            category: "appearances",
            headers: ["Appearances", ""],
            data: [
                { category: "Most Appearances", winner: findPlayerWithMostTotalApps(players) },
                { category: "Least Appearances", winners: findPlayerWithLeastTotalApps(players)},
                { category: "Most Appearances in a Single Month", winner: findPlayersWithMostAppsInMonth(players)}
            ],
        },
        {
            category: "disciplinary",
            headers: ["Disciplinary", ""],
            data: [
                { category: "1st Yellow Card", winner: findNumberYellows(matches, 1) },
                { category: "50th Yellow Card", winner: findNumberYellows(matches, 50)},
                { category: "100th Yellow Card", winner: findNumberYellows(matches, 100)},
                { category: "200th Yellow Card", winner: findNumberYellows(matches, 200)},
                { category: "1st Red Card", winner: findNumberReds(matches, 1) },
                { category: "10th Red Card", winner: findNumberReds(matches, 10) },
                { category: "Most Yellow Cards", winner: findPlayersWithMostYellows(players)},
                { category: "Most Red Cards", winners: findPlayersWithMostReds(players) },
                { category: "Total Yellow Cards", winners: findTotalYellows(matches) },
                { category: "Total Red Cards", winners: findTotalReds(matches) },
                { category: "Most Yellows in a Single Month", winner: findPlayersWithMostYellowsInMonth(players)},
                { category: "Most Reds in a Single Month", winner: findPlayersWithMostRedsInMonth(players)},
                { category: "Players With Least Yellows", winner: findPlayersWithLeastYellows(players)
                }
            ],
        },
        {
            category: "season",
            headers: ["Season", ""],
            data: [
                { category: "Total Home Goals", winner: findTotalHomeGames(matches) },
                { category: "Total Away Goals", winner: findTotalAwayGames(matches) },
                { category: "Total Games", winner: finalTotalMatches(matches) },
                { category: "Total Goals", winner: findTotalNumberOfGoals(matches) },
                { category: "Total Slingers", winner: finalTotalSlingers(matches) },
                { category: "Total Assists", winner: finalTotalAssists(matches) },
                { category: "Most Appearances", winner: findPlayerWithMostTotalApps(players) },
                { category: "Most Wins", winner: findPlayerWithMostWins(players) }, // Ensure the "Most Wins" category is in the right position
                { category: "Most Defeats", winner: findPlayersWithMostDefeats(teams) },
                { category: "Most Draws", winner: findPlayersWithMostDraws(teams) },
                { category: "Most Clean Sheets", winner: findPlayersWithMostCleanSheets(players) },
                { category: "Most MOTM", winner: findPlayersWithMostMOTM(players) },
                { category: "Most Points", winner: findPlayersWithMostPoints(teams) },
            ],
        }
    ];



    renderAwards(awardsData);


    function renderAwards(awards) {
        awards.forEach(category => {
            const container = document.querySelector(`.${category.category}-container`);
            if (!container) return;

            const table = document.createElement("table");
            table.classList.add("table2");
            container.appendChild(table);

            // Render headers
            const headerRow = table.insertRow();
            category.headers.forEach(header => {
                const th = document.createElement("th");
                th.innerHTML = header;
                headerRow.appendChild(th);
            });

            category.data.forEach(data => {
                const row = table.insertRow();
                Object.values(data).forEach(value => {
                    const td = document.createElement("td");
                    if (value && typeof value === "object") {
                        const objectValues = Object.values(value);
                        const cleanedValues = objectValues.map(val => (typeof val === "object" ? val.join(", ") : val));
                        td.textContent = cleanedValues.reverse().join(" - ");
                    } else {
                        td.textContent = value;
                    }
                    row.appendChild(td);
                });
            });
        });
    }
    
});