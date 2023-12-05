import fs from 'fs'

function validGame(game) {
    const cubes = {
        red: 12,
        green: 13,
        blue: 14
    }

    const digitsRegex = /\d{1,2}/ig

    const rounds = game.split('; ')

    for (let round of rounds) {
        const greenRegex = /\d{1,2}\s\bgreen\b/ig
        let greens = round.match(greenRegex)

        const blueRegex = /\d{1,2}\s\bblue\b/ig
        let blues = round.match(blueRegex)
        const redRegex = /\d{1,2}\s\bred\b/ig
        let reds = round.match(redRegex)

        reds = reds !== null ? reds.join('').match(digitsRegex)[0]: '0'
        blues = blues !== null ? blues.join('').match(digitsRegex)[0] : '0'
        greens = greens !== null ? greens.join('').match(digitsRegex)[0] : '0'

        if (parseInt(reds) > cubes.red || parseInt(greens) > cubes.green || parseInt(blues) > cubes.blue) {
            return false 
        }
    }
    return true 
}

function partOne() {
    const data = fs.readFileSync('./input', 'utf-8')
    const games = data.split('\n')
    let validGames = 0

    for (let index = 0; index < games.length; index++) {
        const game = games[index]

        if (game) {
            if (validGame(game)) {
                validGames += (index + 1)
            }
        }
    }

    console.log(validGames)
}

partOne()
