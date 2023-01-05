require("dotenv").config()

const express = require("express")
const https = require("https")
const bodyParser = require("body-parser")
const { request } = require("http")

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res) {
	res.sendFile(`${__dirname}/index.html`)
})

app.post("/", (req, res) => {
	const query = req.body.city
})

// 	const unit = ""
// 	const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${process.env.API_KEY}&units=${unit}`
// 	https.get(url, (response) => {
// 		console.log(response.statusCode)
// 		response.on("data", (data) => {
// 			const weatherData = JSON.parse(data)
// 			const icon = weatherData.weather[0].icon
// 			const imageURL = `https://openweathermap.org/img/wn/${icon}@2x.png`

// 			res.write(`<h1> The current weather description is ${weatherData.weather[0].description} </h1>`)
// 			res.write(`<h1>The temperature in Lagos is ${weatherData.main.temp} degree celsius</h1>`)
// 			res.write("<img src=" + imageURL + ">")
// 			res.send()
// 		})
// 	})

app.listen(3000, () => {
	console.log("App is running on port 3000")
})
