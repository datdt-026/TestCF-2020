let EPL = [{
        name: "Asenal",
        points: 99,
        GD: 45,
    },
    {
        name: "Chelsea",
        points: 75,
        GD: 39,
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29,
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39,
    },
];

console.log(EPL);

function compare(a, b) {
    if (a.points > b.points) {
        return -1;
    }
    if (a.points < b.points) {
        return 1;
    }
    return 0;
}

EPL.sort(compare);
console.log(EPL);