const fetch = require('node-fetch');
const schedule = require('node-schedule');
const {
  updateWallPaper
} = require('./fileUtil.js');
const BASE_URL = 'https://www.bing.com'


const job = schedule.scheduleJob('* * 8 * * *', fetchData)

function fetchData() {
  fetch('https://www.bing.com/HPImageArchive.aspx?idx=0&n=1&format=js&pid=HpEdgeAn&mkt=zh-cn')
    .then(res => res.json())
    .then(json => {
      // console.log(json)
      let data = json.images[0]
      const {
        url,
        copyright
      } = data
      updateWallPaper(BASE_URL + url, copyright)
    })
}