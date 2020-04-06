let i = 'i'
let zero = 'O'
let star = '&'
let multiply = '*'
let probels = ''

const div = document.getElementById('root')

for (let height = 0; height <= 17; height++) {
    probels = ''
    if (height > 0 && height <= 15) {
        i += 'ii'
        multiply += '**'
        star += '&&'
        zero += 'OO'
    }
    for (let k = 0; k <= 30; k++) {
        if (height === 0 && k === 15) {
            console.log(probels + '$')
            const star = document.createElement('p')
            star.innerHTML = '$'
            star.className = 'star'
            div.appendChild(star)
        }
        else if (height > 0 && height <= 5 && probels.length === (30 / 2) - height) {
            console.log(probels + i)
            const span = document.createElement('p')
            span.innerHTML = `${star} `
            span.className = 'blue'
            div.append(span)
        }
        else if (height > 5 && height <= 10 && probels.length === (30 / 2) - height) {
            console.log(probels + multiply)
            const starSpan = document.createElement('p')
            starSpan.innerHTML = `${star} `
            starSpan.className = 'red'
            div.append(starSpan)
        }
        else if (height > 10 && height <= 13 && probels.length === (30 / 2) - height) {
            console.log(probels + zero)
            const zeroSpan = document.createElement('p')
            zeroSpan.innerHTML = `${star} `
            zeroSpan.className = "green"
            div.append(zeroSpan)
        }
        if (height === 14 && probels.length === (30 / 2) - height) {
            console.log(probels + i)
            const iSpan = document.createElement('p')
            iSpan.innerHTML = `${star}`
            iSpan.className = 'red'
            div.append(iSpan)
        }
        probels += ' '
        if (height === 16 && probels.length === (30 / 2) - 1) {
            console.log(probels + '|||')
            const root = document.createElement('p')
            root.innerHTML = `| | | | |`
            root.className = 'red'
            div.append(root)
        }
        if (height === 17 && probels.length === (30 / 2) - 1) {
            console.log(probels + '|||')
            const tree = document.createElement('p')
            tree.innerHTML = `| | | | |`
            tree.className = 'red root'
            div.append(tree)
            if (1 == 1) {
                const tree = document.createElement('p')
                tree.innerHTML = `| | | | |`
                tree.className = 'red root'
                div.append(tree)
            }
        }
    }
}
