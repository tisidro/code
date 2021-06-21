var scores = ["Hole-in-One!", "Eagle", "Birdie", "par", "Bogie", "double bogie", "go home!"]

function golfScore(par, strokes) {
    if (strokes == 1) {
        return scores[0]
    } else if (strokes <= par - 2) {
        return scores[1]
    }
    else if (strokes == par - 1) {
        return scores[2]
    }
    else if (strokes == par) {
        return scores[3]
    }
    else if (strokes <= par + 1) {
        return scores[4]
    }
    else if (strokes <= par + 2) {
        return scores[5]
    }
    else if (strokes <= par + 3) {
        return scores[6]
    }
}

console.log(golfScore(3, 6))