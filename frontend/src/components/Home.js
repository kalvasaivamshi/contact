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
import DisplayContacts from "./DisplayContacts";

export default function Home() {
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [msg, setmsg] = useState("");
	const navigate = useNavigate();
	const handleSave = (event) => {
		event.preventDefault();
		let save_data = {
			name: name,
			phone: phone,
			email: email,
		};
		console.log(save_data);
		axios
			.post("http://localhost:6001/create", save_data)
			.then((res) => setmsg(res.data))
			.catch((err) => {
				console.log("error" + err);
			});
        
		if (msg === "insert successfull") {
			navigate("/Home");
		}
		if (msg === "insert unsuccessfull") {
			navigate("/SignUp");
		}
	};
	return (
		<Container maxWidth={false} >
		
			<Container>
				
					<Grid container item xs={4} >
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
									<CardHeader title="Add Contacts" style={{color:'#7267CB',fontSize:'9px'}} />	
									<TextField
										type="name"
										className="field"
										label="Name"
										name="name"
										value={name}
										onChange={(e) => {
											setName(e.target.value);
										}}
										margin="dense"
										required
									/>
									<TextField
										type="phone"
										className=" field"
										label="Phone"
										name="phone"
										onChange={(e) => {
											setPhone(e.target.value);
										}}
										value={phone}
										margin="dense"
										required
									/>
									<TextField
										type="email"
										className=" field"
										label="Email"
										name="secret"
										value={email}
										onChange={(e) => {
											setEmail(e.target.value);
										}}
										margin="dense"
										required
									/>
									<p></p>
									<Button
										color="primary"
										variant="contained"
										onClick={handleSave}
									>
										Save
									</Button>
								</CardContent>
							</Box>
						</Card>
					
				</Grid>
                
			</Container>
            <DisplayContacts>
            </DisplayContacts>
		</Container>
        
	);
}
