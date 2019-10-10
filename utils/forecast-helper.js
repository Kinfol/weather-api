const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const forecastURL = 'https://api.darksky.net/forecast/68b95df1b072c6017de08854268370e1/' + latitude + ',' + longitude
    // const dynamicURL = forecastURL + latitude + ',' + longitude
    request({ url: forecastURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.error ) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, response.body.daily.data[0].summary + 'There is a ' + response.body.currently.precipProbability + '% chance of rain')
        
    }
})
}

module.exports = forecast

// const request = require('request')

// const forecast = (latitude, longitude, callback) => {
//     const forecastURL = 'https://api.darksky.net/forecast/68b95df1b072c6017de08854268370e1/' + latitude + ',' + longitude

//     request({ url: forecastURL, json: true }, (error, response) => {
//         if (error) {
//             callback('Unable to connect to weather service!', undefined)
//         } else if (response.body.error) {
//             callback('Unable to find location', undefined)
//         } else {
//             callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
//         }
//     })
// }

// module.exports = forecast