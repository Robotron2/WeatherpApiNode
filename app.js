const express = require("express")
const https = require("https")
// const bodyParser = require("body-parser")

const app = express()
// app.use(bodyParser, urlencoded({ extended: true }))

app.get("/", function (req, res) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=${process.env.API_KEY}&units=metric`
	https.get(url, (response) => {
		console.log(response)
	})

	res.sendFile(`${__dirname}/index.html`)
})

app.listen(3000, () => {
	console.log("App is running on port 3000")
})
