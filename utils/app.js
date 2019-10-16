const express = require ('express')
const app = express()

app.get('', (req, res) => {
    res.send('</h1>Hello express</h1>')
})

app.get('/help', (req, res) =>{
    res.send([{
        name: 'Andrew'
    },{
        age: 27
    }])
})

app.get('/About', (req, res) =>{
    res.send('Help page')
})

app.get('/About', (req, res) =>{
    res.send('Your weather')
})

//app.com
//app.com/help
//app.com/about

app.listen(3000, () =>{
    console.log('Server is up on port 3000')
})