import fs from 'fs'

function partOne() {
    const data = fs.readFileSync('input', 'utf-8')

    const lines = data.split('\n')
    const regex = /\d/g
    let result = 0

    lines.map(item => {
        if (item) {
            const match = item.match(regex)
            const itemResult = match[0] + match[match.length - 1]
            result += Number(itemResult)
        }
    })

    console.log(result)
}

function partTwo() {
    const data = fs.readFileSync('input', 'utf-8').replaceAll("one", "o1ne").replaceAll("two", "t2wo").replaceAll("three", "t3hree")
        .replaceAll("four", "f4our").replaceAll("five", "f5ive").replaceAll("six", "s6ix")
        .replaceAll("seven", "s7even").replaceAll("eight", "e8ight").replaceAll("nine", "n9ine");

    const lines = data.split('\n')
    const regex = /\d/g
    let result = 0

    lines.map((item) => {
        if (item) {
            const match = item.match(regex)
            let itemResult = 0;
            itemResult = match[0] + match[match.length - 1]
            result += Number(itemResult)
        }
    })

    console.log(result)
}

partOne()
partTwo()
