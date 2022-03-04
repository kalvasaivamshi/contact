import React from "react";
import "./css/LandingPage.css";
import {  useNavigate } from "react-router-dom";
import { useState } from "react";
import {
	Button,
	TextField,
	Container,
	Box,
	Grid,
	Card,
	CardContent,
	CardHeader,
} from "@material-ui/core";
import axios from "axios";

export default function SignUp() {
	
	const [email, setemail] = useState("");
	
	const [password, setPassword] = useState("");
	const [secret, setSecret] = useState("");
	const [msg, setmsg] = useState("");
	const navigate = useNavigate();

	const handleSignUp = (event) => {
		event.preventDefault();
		let signup_data = {
			
			email: email,
			
			password: password,
			secret: secret,
		};
		console.log(signup_data);
		axios
			.post("http://localhost:6001/sign", signup_data)
			.then((res) => setmsg(res.data))
			.catch((err) => {
				console.log("error" + err);
			});
		if (msg === "insert successfull") {
			navigate("/");
		}
		if (msg === "insert unsuccessfull") {
			navigate("/SignUp");
		}
	};
	return (
		<Container maxWidth={false}>
		
			<Container>
				
					<Grid container item xs={4}>
						<Card container component="form" elevation={3}>
							<Box
								container
								justifyContent="center"
								alignItems="center"
								textAlign="center"
								width="100%"
								height="auto"
							>
								<CardContent component="form">
									<CardHeader title="Create Account" style={{color:'#7267CB',fontSize:'9px'}} />

								

									<TextField
										type="email"
										className="field"
										label="Email"
										name="email"
										value={email}
										onChange={(e) => {
											setemail(e.target.value);
										}}
										margin="dense"
										required
									/>
									<TextField
										type="password"
										className=" field"
										label="Password"
										name="password"
										onChange={(e) => {
											setPassword(e.target.value);
										}}
										value={password}
										margin="dense"
										required
									/>
									<TextField
										type="secret"
										className=" field"
										label="Secret"
										name="secret"
										value={secret}
										onChange={(e) => {
											setSecret(e.target.value);
										}}
										margin="dense"
										required
									/>
									<p></p>
									<Button
										color="primary"
										variant="contained"
										onClick={handleSignUp}
									>
										Create Account
									</Button>
								</CardContent>
							</Box>
						</Card>
					
				</Grid>
			</Container>
		</Container>
	);
}
