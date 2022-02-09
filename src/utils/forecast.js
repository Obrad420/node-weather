const request = require('request')

const forecast=(latitude, longitude, callback)=>{
    const url='http://api.weatherstack.com/current?access_key=a6c6cd40d96ad33b35961108a71e2636&query=-'+latitude+','+longitude
    request({url, json:true},(error, {body})=>{
        if(error){
            callback('Unable to connect')
        }else if(body.error){
            callback('Unable to find location')
        }else{
            callback(undefined, body.current.weather_descriptions[0] +'. It is currently '+ body.current.temperature + ' ,but feels like ' + body.current.feelslike + '. Humidity is at ' + body.current.humidity + '%.' )
        }
    })
}
module.exports= forecast