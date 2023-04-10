const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

let corOptions = {
    origin: 'https://localhost:3000'
}
app.use(cors(corOptions));
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:true }));

const sequelize = require("./db/connect");
const userRoutes = require('./routes/user');

app.set('view engine', 'hbs');
app.set('views', 'views');

app.get("/", (req, res)=>{
    res.send("Hello from Appointment Booking app");
})


app.use( '/api/user', userRoutes );

sequelize.sync()
.then(result=>{
    // console.log(result);
  
})
.catch(err =>{
    console.log(err);
});


const start = async() =>{
    try{
        app.listen(PORT, ()=>{
           console.log(`${PORT} you are connected now`);
        })

    }catch(error){
        console.log(error);
    }
}

start();









