export const fakeData = [
    {
        id: 1,
        username: "Jose",
        email: "jose@example.com",
        password: "Josehv04",
        profileIcon: "src/images/ZeriP.jpg",

        rankedSolo: {
            tier: "src/images/Maestro.png",
            rank: "I",
            lp: 0,
            wins: 10,
            loses: 1,
        },

        recentMatches: [
            {
                mode: "Arena",
                result: "Victoria",
                duration: "23m 15s",
                kills: 20,
                deaths: 0,
                assists: 10,
                kda: 2.67,
            },
        ]
    },

    {
        id: 2,
        username: "Mondonguito",
        email: "mondonguito@example.com",
        password: "123",
        profileIcon: "src/images/ZeriP.jpg",

        rankedSolo: {
            tier: "src/images/Esmeralda.png",
            rank: "I",
            lp: 0,
            wins: 0,
            loses: 10,
        },

        recentMatches: [
            {
                mode: "Aram",
                result: "Victoria",
                duration: "15m 30s",
                kills: 100,
                deaths: 5,
                assists: 10,
                kda: 3.05,
            },
        ]
    }
]