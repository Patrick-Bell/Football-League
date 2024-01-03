const teams = [
    {
        name: "Stackers",
        gamesPlayed: 0,
        wins: 2,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Neuer",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 2,
        points: 0
    },
    {
        name: "Boxer",
        gamesPlayed: 0,
        wins: 2,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Russian Keeper",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Caveman",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 2,
        points: 0
    },
    {
        name: "Van Dijk (red)",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Van Dijk (orange)",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 2,
        points: 0
    },
    {
        name: "Kroos",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Bastian",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "De Bruyne",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Eriksen",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Maradonna",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Modric",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Pedri",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Assunco",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Robinho",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Messi (ft)",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Van Persie",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Mbappe",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Bale",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Son",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Mahrez",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Pele",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Mane",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Neymar",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Messi",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Benzema",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Kane",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Lewandowski",
        gamesPlayed: 0,
        wins: 2,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Jiminez",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Ronaldo",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Suarez",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Muller",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Zlatan",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 2,
        points: 0
    },
    {
        name: "Carragher",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Puyol",
        gamesPlayed: 0,
        wins: 2,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Berbatov",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 2,
        points: 0
    },
    {
        name: "Ramos",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 1,
        points: 0
    },
    {
        name: "Raul",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Van Persie (red)",
        gamesPlayed: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        points: 0
    },
    {
        name: "Beckham",
        gamesPlayed: 0,
        wins: 1,
        draws: 0,
        losses: 0,
        points: 0
    }

];

teams.forEach(team => {
    team.points = team.wins * 3 + team.draws;
    team.gamesPlayed = team.wins + team.draws + team.losses;
});

teams.sort((a, b) => b.points - a.points);

const tbody = document.querySelector("#scoreTable tbody")

teams.forEach((team, index) => {
    const row = tbody.insertRow(index);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    cell1.textContent = team.name;
    cell2.textContent = team.gamesPlayed;
    cell3.textContent = team.wins;
    cell4.textContent = team.draws;
    cell5.textContent = team.losses;
    cell6.textContent = team.points;

    if (index === 0) {
        row.style.background = "gold"
    } else if (index > 0 && index < 4) {
        row.style.background = "blue"
    } else if (index > 35 && index < 42) {
        row.style.background = "red"
    } else if (index === 4) {
        row.style.background = "orange"
    }
});
