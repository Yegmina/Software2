'use strict';



    const target = document.getElementById("target");

function getCandidates(numCandidates) {
    const candidates = []


    function nameExists(name) {
        return candidates.some(function(candidate) {
            return candidate.name=== name
        });
    }

    for (let i = 0; i < numCandidates; i++) {
        const name = prompt(`Name for candidate ${i + 1}:`).trim();

        if (nameExists(name)) {
            alert("Name already exists. Please enter a different name.")
            i--;
        } else {
            candidates.push({ name: name, votes: 0 })
        }
    }
    return JSON.stringify(candidates);
}


    function recordVotes(candidatesJson, numVoters) {
        const candidates = JSON.parse(candidatesJson)

        for (let i = 0; i < numVoters; i++) {
            const vote = prompt(`Voter ${i + 1}, enter the candidate's name you vote for (or press Enter to skip):`);
            if (vote) {
                let validVote = false
                candidates.forEach(candidate => {
                    if (candidate.name.toLowerCase() === vote.toLowerCase()) {
                        candidate.votes += 1
                        validVote = true
                    }
                });
                if (!validVote) {
                    alert("Invalid candidate name entered.")
                    i--
                }
            } else {
                alert("No vote recorded.")
            }
        }
        return JSON.stringify(candidates);
    }

    function displayResults(candidatesJson) {
        const candidates = JSON.parse(candidatesJson)
        candidates.sort((a, b) => b.votes - a.votes)
        const winner = candidates[0];

        target.innerHTML = `<p>The winner ${winner.name} with ${winner.votes} votes.</p><h2>Results:</h2>`;
        candidates.forEach(candidate => {
            target.innerHTML += `<p>${candidate.name}: ${candidate.votes} votes</p>`
        });
    }


        const numCandidates = Number(prompt("Enter the number of candidates:"));
        const candidatesJson = getCandidates(numCandidates)

        const numVoters = Number(prompt("Enter the number of voters:"))
        const updatedCandidatesJson = recordVotes(candidatesJson, numVoters)

        displayResults(updatedCandidatesJson);

