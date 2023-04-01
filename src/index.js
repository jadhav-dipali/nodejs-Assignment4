const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

let ans, test, msg;
function Allcorrect(req, res , next){
 let n1 = req.body.num1;//3
 let n2=req.body.num2;//5
  if(n2===0 && req.url==="/devide"){
      msg="Cannot divide by zero";
      test = "err";
      ans=null
   }
    else if(n1<-1000000 || n2<-1000000){
        msg = "Underflow";
        test = "err"
        ans=null
    }
   else  if(n1>1000000 || n2>1000000){
        msg = "Overflow";
        test = "err"
        ans=null
    }
   else if(isNaN(n1) || isNaN(n2)){
        msg="Invalid data types";
        test = "err"
        ans=null
    }
else{
  if(req.url==="/add"){
    ans = n1+n2;
    test="sucess";
    msg="the sum of given two numbers"
    if(ans >1000000){
       msg = "Overflow" 
       test="err";
       ans=null;
    }else if(ans<-1000000){
        msg = "Underflow"
        test="err";
       ans=null;
    }

  }
  if(req.url==="/sub"){
    ans = n1-n2;
    test="sucess";
    msg="the difference of given two numbers"

    if(ans >1000000){
       msg = "Overflow" 
       test="err";
       ans=null;
    }else if(ans<-1000000){
        msg = "Underflow"
        test="err";
       ans=null;
    }
    
  }
  if(req.url==="/multiply"){
    ans = n1*n2;
    test="sucess";
    msg="the product of given two numbers"
    if(ans >1000000){
        msg = "Overflow" 
        test="err";
       ans=null;
    }else if(ans<-1000000){
        msg = "Underflow"
        test="err";
       ans=null;
    }
    
  }

  if(req.url==="/devide"){
    ans = n1/n2;
    test="sucess";
    msg="the division of given two numbers"
    if(ans >1000000){
       msg = "Overflow"
       test="err";
       ans=null; 
    }else if(ans<-1000000){
        msg = "Underflow"
        test="err";
       ans=null;
    }
    
  }

}
// console.log(opera)
next ();

}


function ArithmaticOpera(){
   let  str =  ` status :${test},
                 massage :${msg},
                 result:${ans}`
  

return str;
}

app.get("/" ,(req,res)=>{
    
    res.send("Hello World!!!")
})
app.post("/add" ,Allcorrect,(req, res)=>{
    // console.log(opera)
    res.send(ArithmaticOpera())
})
app.post("/sub" ,Allcorrect,(req, res)=>{
    res.send(ArithmaticOpera())
})
app.post("/multiply" ,Allcorrect,(req, res)=>{
    res.send(ArithmaticOpera())
})
app.post("/devide" ,Allcorrect,(req, res)=>{
    res.send(ArithmaticOpera())
})


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;