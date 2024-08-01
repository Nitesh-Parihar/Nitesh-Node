
const express = require("express")
const cors = require("cors")


const tourRoute = require("./routes/tourRoutes")

const app = express ()




 // middleware
app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname}/public`))









app.use("/api/v1/tour",tourRoute)






//User Routes


module.exports = app