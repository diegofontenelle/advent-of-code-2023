import fs from 'fs'

function validGame(game) {
    const cubes = {
        red: 12,
        green: 13,
        blue: 14
    }

    const digitsPattern = "\\d{1,2}"
    const digitsRegex = new RegExp(digitsPattern, 'g')
    const colorRegex = color => new RegExp(`${digitsPattern}\\s\\b${color}\\b`, 'g')

    const rounds = game.split('; ')

    for (let round of rounds) {
        let reds = round.match(colorRegex('red'))
        let greens = round.match(colorRegex('green'))
        let blues = round.match(colorRegex('blue'))

        reds = reds !== null ? reds.join('').match(digitsRegex)[0]: '0'
        greens = greens !== null ? greens.join('').match(digitsRegex)[0] : '0'
        blues = blues !== null ? blues.join('').match(digitsRegex)[0] : '0'

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
