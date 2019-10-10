const geocode = require('./geocode-helper')
const forecast = require ('./forecast-helper')
const address = process.argv[2]

if (!address){
    console.log('provide with address')
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        } 
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            } 
            console.log(data.location)
            console.log(forecastData)
        })
    })
}

