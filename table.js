const monthTypeSelect = document.getElementById("month-type");


const teams = [
    {
        name: "Stackers",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 1, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 3, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Neuer",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 4, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Boxer",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 7, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Russian Keeper",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 5, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 4, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Caveman",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 0, losses: 4, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 3, draws: 3, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Van Dijk (red)",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 3, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Van Dijk (orange)",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 1, losses: 5, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 4, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Kroos",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Bastian",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "De Bruyne",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Eriksen",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 3, losses: 3, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Maradonna",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Modric",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 2, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 3, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Pedri",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 4, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Assunco",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 0, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Robinho",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Messi (ft)",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Van Persie",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Mbappe",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Bale",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Son",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Mahrez",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Pele",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 5, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Mane",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 5, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Neymar",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 4, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Messi",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Benzema",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 2, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Kane",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 1, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Lewandowski",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 2, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 3, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Jiminez",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Ronaldo",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 1, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Suarez",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 3, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Muller",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 2, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Zlatan",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 4, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Carragher",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 3, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Puyol",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 5, losses: 3, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Berbatov",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Ramos",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 4, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Raul",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Van Persie (red)",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Beckham",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 2, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Torres",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },
    {
        name: "Bowen",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 4, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    }

];


window.teams = teams;


teams.forEach(team => {
    // Calculate the sum of 'apps', 'won', 'draw', etc. properties using reduce
    const totalWins = team.monthlyData.reduce((sum, month) => sum + month.wins, 0);
    const totalDraws = team.monthlyData.reduce((sum, month) => sum + month.draws, 0);
    const totalLosses = team.monthlyData.reduce((sum, month) => sum + month.losses, 0);


    const totalGamesPlayed = totalWins + totalDraws + totalLosses
    const totalPoints = (totalWins * 3) + totalDraws

    // Assign the calculated values to overallData properties
    team.monthlyData[0].gamesPlayed = totalGamesPlayed;
    team.monthlyData[0].wins = totalWins;
    team.monthlyData[0].draws = totalDraws;
    team.monthlyData[0].losses = totalLosses;
    team.monthlyData[0].points = totalPoints;

    team.monthlyData.forEach(month => {
        const totalGamesPlayed = month.wins + month.draws + month.losses
        const totalPoints = (month.wins * 3) + month.draws

        month.gamesPlayed = totalGamesPlayed;
        month.points = totalPoints;
    });
});


teams.sort((a, b) => {
    // First, compare points in descending order
    if (b.monthlyData[0].points !== a.monthlyData[0].points) {
      return b.monthlyData[0].points - a.monthlyData[0].points;
    }
  
    // If points are equal, compare gamesPlayed in ascending order
    return a.monthlyData[0].gamesPlayed - b.monthlyData[0].gamesPlayed;
  });
  
const tbody = document.querySelector("#scoreTable tbody")

clearTable(); // Clear the table before rendering
teams.forEach((team, index) => renderTableData(team, tbody, index));

function renderTableData(team, tbody, index) {
    const row = tbody.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    const cell5 = row.insertCell(4);
    const cell6 = row.insertCell(5);

    cell1.textContent = team.name;
    cell2.textContent = team.monthlyData[0].gamesPlayed;
    cell3.textContent = team.monthlyData[0].wins;
    cell4.textContent = team.monthlyData[0].draws;
    cell5.textContent = team.monthlyData[0].losses;
    cell6.textContent = team.monthlyData[0].points;

    if (index === 0) {
        row.style.background = "gold";
    } else if (index >= 1 && index <= 4) {
        row.style.background = "cyan";
    } else if (index === 5) {
        row.style.background = "orange";
    } else if (index >= 38 && index < 43) {
        row.style.background = "red";
    } else {
        row.style.background = "white";
    }
}



function renderMonthlyData(team, tbody) {
    team.monthlyData.slice(1).forEach(monthData => {
        const monthRow = tbody.insertRow();
        const monthCell1 = monthRow.insertCell(0);
        const monthCell2 = monthRow.insertCell(1);
        const monthCell3 = monthRow.insertCell(2);
        const monthCell4 = monthRow.insertCell(3);
        const monthCell5 = monthRow.insertCell(4);
        const monthCell6 = monthRow.insertCell(5);

        monthCell1.textContent = monthData.month;
        monthCell2.textContent = monthData.gamesPlayed;
        monthCell3.textContent = monthData.wins;
        monthCell4.textContent = monthData.draws;
        monthCell5.textContent = monthData.losses;
        monthCell6.textContent = monthData.points;
    });
}

function clearTable() {
    // Clear the existing table rows only if there are any
    const existingRows = tbody.querySelectorAll("tr");
    existingRows.forEach(row => tbody.removeChild(row));
}

function getMonthlyDataForPlayer(team, selectedMonth) {
    const monthData = team.monthlyData.find(month => month.month.toLowerCase() === selectedMonth.toLowerCase());

    if (monthData) {
        // If the player has data for the selected month, use it
        return monthData;
    } else {
        // If the player doesn't have data for the selected month, return default data
        return { month: selectedMonth, gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 };
    }
}

monthTypeSelect.addEventListener('change', function () {
    const selectedMonth = this.value;

    // Clear the existing table rows
    clearTable();

switch (selectedMonth) {
    case "overall":
        teams.forEach((team, index) => renderTableData(team, tbody, index));
        teams.sort((a, b) => {
            // First, compare points in descending order
            if (b.monthlyData[0].points !== a.monthlyData[0].points) {
              return b.monthlyData[0].points - a.monthlyData[0].points;
            }
          
            // If points are equal, compare gamesPlayed in ascending order
            return a.monthlyData[0].gamesPlayed - b.monthlyData[0].gamesPlayed;
          });        
          break;
    default:
        const teamsInMonth = teams.map(team => {
            const monthData = getMonthlyDataForPlayer(team, selectedMonth);
            return { ...team, monthlyData: [monthData] };
        });

        teamsInMonth.sort((a, b) => {
            // First, compare points in descending order
            if (b.monthlyData[0].points !== a.monthlyData[0].points) {
              return b.monthlyData[0].points - a.monthlyData[0].points;
            }
          
            // If points are equal, compare gamesPlayed in ascending order
            return a.monthlyData[0].gamesPlayed - b.monthlyData[0].gamesPlayed;
          });

        teamsInMonth.forEach((team, index) => renderTableData(team, tbody, index));
        break;
}



});


