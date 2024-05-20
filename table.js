 const monthTypeSelect = document.getElementById("month-type");


const teams = [
    {
        name: "Stackers",
        form: ["W", "L"],
        country: "https://flagicons.lipis.dev/flags/4x3/us.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 1, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 3, losses: 3, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 4, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 3, draws: 3, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 2, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/de.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 5, losses: 3, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 2, losses: 3, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 3, losses: 4, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 1, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 7, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 3, draws: 2, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 4, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 4, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/ru.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 5, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 6, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 3, draws: 1, losses: 1, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 3, draws: 1, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 5, losses: 2, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 0, losses: 4, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 3, draws: 4, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 3, losses: 3, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 2, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/nl.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 3, losses: 3, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 2, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 1, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
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
        country: "https://flagicons.lipis.dev/flags/4x3/nl.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 1, losses: 5, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 4, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 4, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 1, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 3, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/de.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 5, losses: 1, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 4, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 2, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/de.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 2, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 1, losses: 1, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 1, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 2, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/be.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 3, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 0, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 4, losses: 2, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/dk.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 3, losses: 4, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 1, losses: 4, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 1, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 3, losses: 2, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/ar.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 0, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 4, draws: 4, losses: 1, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 0, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 3, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/hr.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 2, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 4, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 1, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 3, draws: 1, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 2, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/es.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 3, draws: 5, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 3, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 4, draws: 4, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 2, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/br.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 3, draws: 0, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 3, draws: 2, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 3, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 3, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/br.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 0, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 2, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 3, draws: 1, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/ar.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 0, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
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
        name: "Van Persie (orange)",
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/nl.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 2, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 2, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/fr.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 4, draws: 0, losses: 1, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 2, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-wls.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 3, draws: 1, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 0, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 3, draws: 3, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/kr.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 2, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 4, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 3, draws: 1, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 0, losses: 2, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/dz.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 2, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 4, draws: 3, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/br.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 5, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 2, losses: 4, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 2, losses: 2, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/sn.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 5, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 4, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 5, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/br.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 4, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 1, losses: 3, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 2, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 3, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/ar.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 1, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 0, losses: 3, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 1, losses: 2, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/fr.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 2, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 4, draws: 7, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 3, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 1, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 3, draws: 3, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/pl.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 2, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 3, draws: 3, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 2, losses: 1, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 2, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 3, losses: 3, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/mx.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 4, draws: 2, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 1, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 4, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/pt.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 3, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 1, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 1, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 2, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 3, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/uy.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 4, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 1, losses: 4, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 6, draws: 4, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/de.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 2, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 2, losses: 4, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 2, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/se.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 4, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 2, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 3, draws: 4, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 3, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 2, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 1, draws: 3, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 2, losses: 4, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/es.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 4, draws: 0, losses: 1, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 5, losses: 3, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 4, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 1, losses: 4, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 3, losses: 1, points: 0 },
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
        form: ["L", "L", "L", "W", "L", "D", "L"],
        country: "https://flagicons.lipis.dev/flags/4x3/rs.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 3, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 2, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 2, losses: 1, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 2, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 3, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/es.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 2, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 4, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 1, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 2, losses: 1, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/nl.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 3, draws: 2, losses: 8, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 0, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 1, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 2, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 4, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 0, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/es.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 2, draws: 2, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 2, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 4, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 0, losses: 0, points: 0 },
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
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 4, draws: 2, losses: 1, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 2, losses: 3, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 3, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
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
        name: "Bruney",
        form: ["L", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 3, losses: 6, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 3, draws: 1, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 5, losses: 1, points: 0 },
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
        name: "Pogba",
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/fr.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 3, draws: 2, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 3, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 4, losses: 0, points: 0 },
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
        name: "Ronaldinho",
        form: ["D", "L", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/br.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 3, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 3, draws: 0, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 2, losses: 0, points: 0 },
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
        name: "Baldy",
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/mx.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 4, draws: 4, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 2, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
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
        name: "2-Face",
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/es.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 4, draws: 3, losses: 2, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 2, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 2, losses: 1, points: 0 },
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
        name: "Allison",
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/br.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 1, draws: 5, losses: 3, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 4, draws: 0, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 3, losses: 4, points: 0 },
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
        name: "Russian Def",
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/ru.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 3, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 2, draws: 2, losses: 3, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 2, losses: 1, points: 0 },
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
        name: "Ferdinand",
        form: ["W", "L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 2, draws: 2, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 3, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 1, losses: 0, points: 0 },
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
        name: "Risse",
        form: ["L", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/no.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 1, losses: 4, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 3, draws: 1, losses: 2, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 2, losses: 2, points: 0 },
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
        name: "Beckham (lego)",
        form: ["D", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 5, losses: 1, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 2, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 1, losses: 0, points: 0 },
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
        name: "Trippier",
        form: ["D", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/gb-eng.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 1, losses: 1, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 3, losses: 1, points: 0 },
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
        name: "Henry",
        form: ["D", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/fr.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 1, draws: 2, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 3, losses: 1, points: 0 },
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
        name: "Ramos (lego)",
        form: ["D", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/es.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 1, draws: 5, losses: 1, points: 0 },
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
        name: "Kaka",
        form: ["D", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/br.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 4, losses: 1, points: 0 },
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
        name: "Haaland",
        form: ["D", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/no.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 2, losses: 1, points: 0 },
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
        name: "Joaquin",
        form: ["D", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/es.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 2, draws: 0, losses: 0, points: 0 },
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
        name: "Marquez",
        form: ["D", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/mx.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 2, losses: 0, points: 0 },
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
        name: "Benega",
        form: ["D", "D"],
        country: "https://flagicons.lipis.dev/flags/4x3/ar.svg",
        monthlyData: [
            { month: "Overall", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "January", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "February", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "March", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "April", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "May", gamesPlayed: 0, wins: 0, draws: 1, losses: 0, points: 0 },
            { month: "June", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "July", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "August", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "September", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "October", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "November", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
            { month: "December", gamesPlayed: 0, wins: 0, draws: 0, losses: 0, points: 0 },
        ]
    },

];



window.teams = teams;

function findMayStats(){
   return teams.map(team => {
        const mayStats = team.monthlyData.find(stat => stat.month === 'January')
        if (mayStats) {
            return {
                name: team.name,
                record: mayStats,
            }
        } else {
            console.log('no data found')
        }
    })
}

const mayStats = findMayStats()
console.log('May Stats', mayStats)


function calculateTotalGamesPlayedForTeams(teams) {
    let totalWins = 0;
    let totalDraws = 0;
    let totalLosses = 0;

    // Iterate through each team in the array
    teams.forEach(team => {
        // Iterate through monthly data for each team
        team.monthlyData.forEach(monthData => {
            totalWins += monthData.wins || 0;
            totalDraws += monthData.draws || 0;
            totalLosses += monthData.losses || 0;
        });
    });

    return totalWins + totalDraws + totalLosses;
}

const totalGamesPlayedForTeams = calculateTotalGamesPlayedForTeams(teams);
console.log(`Total Games Played for all teams: ${totalGamesPlayedForTeams}`);


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
    const cell0 = row.insertCell(0);
    const cell1 = row.insertCell(1);
    const cell2 = row.insertCell(2);
    const cell3 = row.insertCell(3);
    const cell4 = row.insertCell(4);
    const cell5 = row.insertCell(5);
    const cell6 = row.insertCell(6);
    const cell7 = row.insertCell(7)

    cell0.textContent = index + 1;
    cell1.innerHTML = `<img src="${team.country}" alt="${team.name}" class="flag-img"> ${team.name}`;
    cell2.textContent = team.monthlyData[0].gamesPlayed;
    cell3.textContent = team.monthlyData[0].wins;
    cell4.textContent = team.monthlyData[0].draws;
    cell5.textContent = team.monthlyData[0].losses;
    cell6.textContent = team.monthlyData[0].points;


    // Styling based on conditions
    const totalRows = teams.length;
    const bottomRowsRange = totalRows - 10;
    const leftLeague = team.name;

    if (index === 0) {
        row.style.background = "gold";
    } else if (index >= 1 && index <= 4) {
        row.style.background = "cyan";
    } else if (index === 5) {
        row.style.background = "orange";
    } else if (index >= bottomRowsRange) {
        row.style.background = "red";
    } else if (leftLeague === "Raul") {
        row.style.background = "black";
        row.style.color = "white";
    } else {
        row.style.background = "white";
    }

    /*
    const formCellContent = document.createElement('div');

    // Check if the player has a 'form' property and it's an array
    if (Array.isArray(team.form)) {
        team.form.forEach(char => {
            let span = document.createElement('span');
            span.textContent = char;

            // Apply styles based on the character
            switch (char) {
                case 'W':
                    span.style.backgroundColor = 'green';
                    span.style.color = 'white';
                    break;
                case 'D':
                    span.style.backgroundColor = 'grey';
                    span.style.color = 'white';
                    break;
                case 'L':
                    span.style.backgroundColor = 'red';
                    span.style.color = 'white';
                    break;
                default:
                    // Handle other cases or leave it unstyled
            }

            // Optionally, you can set other styles
            span.style.padding = '0 5px'; // Adjust padding as needed

            // Append the span to formCellContent
            formCellContent.appendChild(span);
        });
    } else {
        // Handle the case where player.form is not an array or is missing
        // You might want to provide a default value or skip rendering this part
        formCellContent.textContent = 'N/A';
    }

    // Append formCellContent to cell7
    cell7.appendChild(formCellContent);

    */

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
        // If the player doesn't have data for the selected month, return null or an empty object
        return {} // or return {};
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


