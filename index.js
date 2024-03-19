// const express = require('express')   // common JS
import express from 'express'          // ES6

const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send('초기 화면 입니당')
})

app.get('/apple', function (req, res) {
    res.send('apple 입니다')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})