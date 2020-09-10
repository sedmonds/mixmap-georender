var fs = require('fs')
var featureList = require('./features.json')

var styleObj = {}
var arr = Object.keys(featureList)

arr.forEach(function (entry) {
  styleObj[entry] = {
			"fill-color": "",
			"stroke-color": "",
			"stroke-width": "",
      "icon": "",
			"icon-display-style": "",
			"point-size": 5,
			"point-fill-color": "#FF0000",
			"point-stroke-color": "",
			"point-stroke-width": "",
			"line-width": "8.0",
			"line-fill-color": "#1f9393",
			"line-stroke-color": "#ffb6c1",
			"line-stroke-width": "4.0",
			"line-overlay": "",
			"area-fill-color": "#ffb6c1",
			"area-fill-pattern": "",
			"label-fill-color": "",
			"label-stroke-color": "",
			"label-stroke-width": "",
			"label-style": ""
    }  
})

fs.writeFileSync('teststylesheet.json', JSON.stringify(styleObj))
