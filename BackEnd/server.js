const express = require('express');
const mysql = require('mysql');
const cors=require('cors')
const bodyParser = require('body-parser');

var app = express();
app.use(cors())
app.use(bodyParser.json());
var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "vamshi@123",
	database: "contacts"
	
});
con.connect(function(err) {
	if (err) {
		throw err;
	} 
	else {
		console.log("connection successfull!");
	}
});
//signup

app.post("/sign",(req,res)=>{
	console.log(req.body);
	var email=req.body.email;
	var password=req.body.password;
	var secret=req.body.secret;
	con.query('insert into signup (email,password,secret) Values(?,?,?) ',[email,password,secret],(err,result)=>{
		if(err){
			res.send("insert unsuccessfull")
			console.log("error"+err);
		}
		else{
			res.send("insert successfull")
			console.log("successfully inserted!!");
		}
	})
})
//add
app.post("/create",(req,res)=>{
	console.log(req.body);
		var name=req.body.name;
		var phone=req.body.phone;
		var email=req.body.email;
	
	
	con.query('insert into data (name,phone,email) Values(?,?,?) ',[name,phone,email],(err,result)=>{
		if(err){
			res.send("insert unsuccessfull")
			console.log("error"+err);
		}
		else{
			res.send("insert successfull")
			console.log("successfully inserted!!");
		}
	})
})
app.get("/displayContacts",(req,res)=>{
	con.query("select * from data",(err,result)=>{
		if(err){ throw err;}
		else{
			res.send(result);
		}
	})
})
app.get("/signup_get",(req,res)=>{
	con.query("SELECT * FROM signup", function (err, result) {
    if (err) {throw err}else{
        
		res.send(result)
	}
  });
})


app.post("/username",(req,res)=>{
	var email=req.body.email
	var password=req.body.password
	con.query("select email,password from signup where email=? and password=?",[email,password],(err,result)=>{
		if(err){
			console.log(err);
		}
		else{
			if(result.length==0){
				res.send("user doesn't exists!!!")
			}
			else{
				res.send("user  exists!!!");
			}	
		}
		
	})
})

app.listen(6001,function(){
	console.log("listening on port 6001")
});
