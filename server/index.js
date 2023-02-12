const express = require('express');
const cors = require('cors')
const morgan = require('morgan')

const app = express();

app.use(cors())
app.use(morgan())
app.use(express.json())
const list = [
    {
        name: "Gol Ring",
        price: "2.00$",
        img: "https://media.discordapp.net/attachments/696730138720862209/1074283288098779146/ring.png"        
    },
    {
        name: "Han Bag",
        price: "2.00$",
        img: "https://cdn.discordapp.com/attachments/696730138720862209/1074283287872274513/bag.png"
    }
]



app.listen(5000, () => {
    console.clear();
    console.log("Server listening to 5000...")
})

app.get('/images', (req, res) => {
    res.json({"data" : list})
})