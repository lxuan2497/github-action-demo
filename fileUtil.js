const fs = require('fs');
const README_PATH = 'README.md'

function getToday () {
  let T = new Date(),
    year = T.getFullYear(),
    month = T.getMonth() + 1,
    day = T.getDate();
  month = month >= 10 ? month : '0' + month
  day = day > 10 ? day : '0' + day
  return `${year}-${month}-${day}`
}

function updateWallPaper(url, copyright) {
  fs.readFile(README_PATH, {
    encoding: 'utf-8',
    flag: 'r+'
  }, (err, data) => {
    if (err) throw err;
    console.log('data', data)
    let day = getToday()
    let md = `## ${day}\n![image](${url})[${copyright}](${url})\n`
    fs.writeFile(README_PATH, md + data, (err) => {
      if (err) throw err;
    })
  })
}

module.exports = {
  updateWallPaper
}