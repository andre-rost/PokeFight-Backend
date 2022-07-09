const express = require('express')
const app = express()
const pokemonRouter = require('./routes/pokemonRouter')
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.use('/', pokemonRouter)

app.get('/', (req, res) => {
    res.send('The Pokemon api chooses you')
  })



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})