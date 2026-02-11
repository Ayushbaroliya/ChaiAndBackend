const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/jokes',(req,res)=>{
  const jokes =[{
    id:1,
    joke:"Why did the math book look sad? Because it had too many problems."
  },
{
  id:2,
  joke:"Why did the math book look sad? Because it had too many problems."
}
,{
  id:3,
  joke:"Why did the math book look sad? Because it had too many problems."
},
{
  id:4,
  joke:"Why did the math book look sad? Because it had too many problems."
},
{
  id:5,
  joke:"Why did the math book look sad? Because it had too many problems."
},
]
  res.send(jokes)
})

app.get('/twitter',(req,res)=>{
  const raman=[{id :1,name :"raman",age:22},{ id :2,name :"suresh",age:22},{id :3,name :"amresh",age:22},{id :4,name :"rahul",age:22},{id :5,name :"surendra",age:22},{id :6,name :"amit",age:22},{id :7,name :"rohit",age:22}]
  res.send(raman)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
});



