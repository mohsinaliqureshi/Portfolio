import app from "./app.js"



app.listen(process.env.PORT, ()=>{
    console.log(`server listeniongh at port ${process.env.PORT}`)

});
