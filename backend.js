const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.get("/",(req, res)=>{
  res.send("this is working..")
})

app.post('/simpleInterest', (req,res)=>{
  const {p,r,t} = req.body

  const total = p*(1+r*t)
  const interest = (p*r*t)/100

  res.json({total:total, interest:interest})
})

app.listen(3000)  