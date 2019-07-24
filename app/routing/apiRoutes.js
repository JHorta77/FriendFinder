const path = require('path');


const friends = require('../data/friends.js');


module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });


    app.post("/api/friends", function (req, res) {
        console.log("testing api");
        let userInput = req.body;

        let userResponses = userInput.scores;

        const matchName = '';
        const matchImage = '';
        const totalDifference = 10000;

        // for (let i = 0; i < friends.length; i++) {

        //     let diff = 0;
        //     for (let k = 0; k < userResponses.length; k++) {
        //         diff += Math.abs(friends[i].scores[k] - userResponses[k]);
        //     }

        //     if (diff < totalDifference) {
        //         totalDifference = diff;
        //         matchName = friends[i].name;
        //         matchImage = friends[i].photo;
        //     }
        // }
        let totalDif;
        let bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };
        for (let i = 0; i < friends.length; i++) {
            const currentF = friends[i];

            totalDif = 0;
            for (let j = 0; j < currentF.score.length; j++) {
                let currentFscore = currentF.score[j];
                let currentUserScore = userResponses[j];
                console.log(currentFscore);
                console.log(currentUserScore);
                totalDif += Math.abs(parseInt(currentUserScore) - parseInt(currentFscore))
            }

            if (totalDif <= bestMatch.friendDifference) {
                bestMatch.name = currentF.name;
                bestMatch.photo = currentF.photo;
                bestMatch.friendDifference = totalDif;
            }
        }

        friends.push(userInput);

        res.json({ status: 'OK', bestMatchName: bestMatch.name, bestMatchImage: bestMatch.photo });
    });
};