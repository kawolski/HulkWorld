const express = require('express')
const app = express()
const port = 6500

app.get('/', (req, res) => {
  res.send('.......................................Welcome to HULK World ! ....................................................')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
