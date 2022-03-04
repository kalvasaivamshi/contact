import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
	Button,
	TextField,
	
	CardContent,
	CardHeader,
	
} from "@material-ui/core";

import axios from "axios";
import "./css/LandingPage.css";



export default function Login1() {
	const navigate = useNavigate();
	const [email, setemail] = useState("");
	const [password, setpassword] = useState("");
	const [msg, setmsg] = useState("");
	const [error, seterror] = useState(false);
	const handleLogin = (event) => {
		event.preventDefault();
		let login_data = {
			email: email,
			password: password,
		};
		axios
			.post("http://localhost:6001/username", login_data)
			.then((res) => console.log(setmsg(res.data)))
			.catch((err) => console.log(err));
		console.log(msg);
		if (msg === "user doesn't exists!!!") {
			console.log(msg);
			document.getElementById("message").style.visibility = "visible";
			window.location.reload();
		}
		if (msg === "user  exists!!!") {
			console.log(msg);
			navigate("/Home");
		}
	};
	const handleCreateAccount = () => {
		navigate("/SignUp");
	};
	return (
		
		
		<CardContent component="form" >
			<CardHeader title="Login" style={{ color: "#7267CB", fontSize: 18 }} />
			

			<TextField
				
				error={error}
				className="field"
				label="Username"
				name="email"
				value={email}
				onChange={(e) => {
					setemail(e.target.value);
				}}
				Icon={<AccountCircleIcon />}
				margin="dense"
				required
			/>

			<TextField
				className="field"
				type="password"
				label="password"
				name="password"
				value={password}
				onChange={(e) => {
					setpassword(e.target.value);
				}}
				margin="dense"
				required
			/>

			<h3 id="message" style={{ visibility: "hidden", color: "#152D35" }}>
				User Doesn't Exists!!
			</h3>

			<Button onClick={handleLogin} color="primary" variant="contained">
				Login
			</Button>

			<p>Don't have an account?</p>

			<Button variant="contained" color="primary" onClick={handleCreateAccount}>
				create account
			</Button>
		</CardContent>
	
		
	);
}
