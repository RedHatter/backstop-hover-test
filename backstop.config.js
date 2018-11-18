const { resolve } = require('path')

module.exports = {
  viewports: [{
    name: 'XGA',
    width: 1024,
    height: 768
  }],
  scenarios: [{
    label: 'Hover',
    url: 'file://' + resolve('./index.html'),
    hoverSelector: '#element',
    postInteractionDelay: 2000,
    delay: 1000
  }],
  paths: {},
  engine: 'puppeteer',
  debugWindow: true
}