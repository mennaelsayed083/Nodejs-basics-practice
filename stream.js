const fs=require ('fs')

let fileData=fs.createReadStream("./index.txt","utf-8")

fileData.on("data",(chunk)=>{
    console.log(chunk)
})

fileData.on("end",()=>
{
    console.log("enddddddddddddddddddddddddddddddddd")
})

let fileData2= fs.createWriteStream("./index2.txt","utf-8")
fileData2.write("welcome menna 3lby ")