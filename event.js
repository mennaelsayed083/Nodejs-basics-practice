
const {EventEmitter}= require('events')
let event=new EventEmitter()

event.on("sum",(x,y)=>{
    console.log(`sum is ${x+y}`)
})

event.emit("sum",5,6)
////////////////////////////////////////////////////////////
event.once("email",(emails)=>{
    console.log(`send your questions on this emails:     ${emails}`)
})
event.emit("email","tennnnnnnnnnnnnnnnnna@com")
event.emit("email"," menna@com")

event.emit("email","adam@com")

/////////////////////////////////////////////////////////////////////
function logUse() {
    console.log("yaaaaaaaaaaaaaaaaaaaaa")
    
}
event.on("user",logUse)
event.removeListener("user",logUse)
event.emit("user")


console.log(event.eventNames())    // once delete event after print once only and remove deleted by yourself


event.on("end",()=>{
    console.log("enddddddddddddddddddddddddddddddd")
})
   