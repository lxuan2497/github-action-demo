const fs = require('fs');

function updateWallPaper (url, copyright) {
  let md = 
  `
  ![image](${url})[${copyright}](${url})
  `
  fs.appendFile('README.md', md, (err) => {
    if (err) throw err;
  })
}

module.exports = {
  updateWallPaper
}