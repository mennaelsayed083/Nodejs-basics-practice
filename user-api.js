

const http= require('http')

let users=[{id:1,name:"menna",age:21},{id:2,name:"ali",age:11},{id:3,name:"adam",age:12}
    ,{id:4,name:"mai",age:18},{id:5,name:"zeina",age:7}
]

let server=http.createServer((req,res)=>{
    let data=""
    if(req.url=='/users'&&req.method=="GET"){
         res.end(JSON.stringify(users))}
          
         else if(req.url=='/users'&&req.method=="POST"){
          req.on("data",(chunk)=>{
            data=JSON.parse(chunk)
          })
         req.on("end",()=>{
            let id=users.length +1
            let {name,age}=data
            users.push({id,name,age})
            console.log(users)
         })
         res.end("user added")
         }
         
         else if(req.url=="/get-user-id"&&req.method=="GET"){
            let id=""
            req.on("data",(chunk)=>{
              id=  JSON.parse(chunk).id
            })
            req.on("end",()=>{
                let search=users.find((user)=>user.id==id)
                if(search){
                    res.end(JSON.stringify(search))
                }else{
                    res.end("user not found")
                }
            })

         }

    else{
        res.end("Route Not Found")
    }
  
    
})
server.listen(3001,()=>{
    console.log("listen port 3001")
})