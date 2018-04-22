const path = require('path')
const fs = require('fs')

const pwd = path.join(__dirname, '')

const file = fs.readFileSync(path.join(__dirname, '/gfwlist.txt')).toString()


let buf = Buffer.from(file, 'base64').toString()

let filtered = buf.split('\n').filter(rule => rule.length > 2 && !/![' '#-]/.test(rule) && !rule.includes('AutoProxy'))

fs.writeFileSync('parsed.txt', filtered.join('\n'), err => {
    console.log('write file err: ', err)
})

console.log(filtered)

// let rules = buf.filter(rule => )
