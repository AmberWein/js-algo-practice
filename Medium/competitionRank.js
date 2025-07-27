/*
Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

No matching values:

Scores = [99, 98, 97, 96, 95]
Rank = 1,  2,  3,  4,  5
With matching values:

Scores = [99, 98, 98, 96, 95]
Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.
Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.

Examples
competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3
Notes
The highest score has a rank value of 1..
*/

function competitionRank( competitors, name) {
  
  const sorted = Object.entries(competitors)
  .sort((a, b) => b[1] - a[1]);

  let ranks = new Map();
  let prevScore = null;
  let currentRank = 0;

  for (let i=0; i < sorted.length; i++) {
    const [competitorName, score] = sorted[i];

    if (score !== prevScore) {
      currentRank = i + 1;
      prevScore = score
    }
    ranks.set(competitorName, currentRank);
  }

  return ranks.get(name) ?? -1;
}

exports.solution = competitionRank;