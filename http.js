const http= require('http')

let users=[{id:1,name:"menna",age:21},{id:2,name:"ali",age:11},{id:3,name:"adam",age:12}
    ,{id:4,name:"mai",age:18},{id:5,name:"zeina",age:7}
]

let server=http.createServer((req,res)=>{
res.end("server is 3000")})

server.listen(3000,()=>{
    console.log("listen port 3000")
})