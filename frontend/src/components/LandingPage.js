import React from 'react';
import "./css/LandingPage.css";

import Login1 from "./Login1";
import {
	Container,
	Grid,
	Card,
	
	Box,
} from "@material-ui/core";
export default function LandingPage() {
	return (
		<Container maxWidth={false}>
		
			<Container>
				

					<Grid container item xs={4} >
						<Card elevation={3}>
							<Box
								container
								justifyContent="center"
								alignItems="center"
								textAlign="center"
								lineHeight={2}
								alignSelf="center"
								flex="center"
							>
							
								<Login1 />
							</Box>
						</Card>
					</Grid>
				
			</Container>
		</Container>
	);
}
