const express = require('express')
const app = express()
const port = 3030

// config apm
var apm = require('elastic-apm-node').start({
    serviceName: 'apmexpress',
    secretToken: 'VYpMojUjGe77Oe7HmP',
    serverUrl: 'https://faa6b3a5b0484f358c641362b0f5e63f.apm.us-west1.gcp.cloud.es.io:443',
    environment: 'production'
  })

// app run and success send data to kibana
app.get('/', (req, res) => {
  res.send('Hello Apm from express')
})

app.post('/', function (req, res) {
    res.send('Got a POST request')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})