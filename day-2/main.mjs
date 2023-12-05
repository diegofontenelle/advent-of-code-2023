import fs from 'fs'

function getCubesCountForColor(color, round) {
    const digitsPattern = "\\d{1,2}"
    const digitsRegex = new RegExp(digitsPattern, 'g')
    const colorRegex = color => new RegExp(`${digitsPattern}\\s\\b${color}\\b`, 'g')

    const cubesByColor = round.match(colorRegex(color))
    const count = cubesByColor !== null ? cubesByColor.join('').match(digitsRegex)[0] : 0

    return parseInt(count)
}

function getGames() {
    const data = fs.readFileSync('./input', 'utf-8')
    const games = data.split('\n')

    return games
}

function isValidGame(game) {
    const cubes = {
        red: 12,
        green: 13,
        blue: 14
    }

    const rounds = game.split('; ')

    for (let round of rounds) {
        const redCubes = getCubesCountForColor('red', round)
        const greenCubes = getCubesCountForColor('green', round)
        const blueCubes = getCubesCountForColor('blue', round)

        if (redCubes > cubes.red || greenCubes > cubes.green || blueCubes > cubes.blue) {
            return false
        }
    }
    return true
}


function partTwo() {
    const games = getGames()
    const minCubes = {
        red: 0,
        green: 0,
        blue: 0
    }
    let sum = 0

    games.forEach(game => {
        game.split('; ').forEach(round => {
            const redCubes = getCubesCountForColor('red', round)
            const greenCubes = getCubesCountForColor('green', round)
            const blueCubes = getCubesCountForColor('blue', round)

            minCubes.red = minCubes.red < redCubes ? redCubes : minCubes.red
            minCubes.green = minCubes.green < greenCubes ? greenCubes : minCubes.green
            minCubes.blue = minCubes.blue < blueCubes ? blueCubes : minCubes.blue
        })

        sum += minCubes.red * minCubes.green * minCubes.blue
        minCubes.red = 0
        minCubes.green = 0
        minCubes.blue = 0
    })

    console.log(sum)
}

function partOne() {
    const games = getGames()
    let validGames = 0

    for (let index = 0; index < games.length; index++) {
        const game = games[index]

        if (game) {
            if (isValidGame(game)) {
                validGames += (index + 1)
            }
        }
    }

    console.log(validGames)
}

partOne()
partTwo()
