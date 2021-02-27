const { Grid, Toolbar, AppBar, Typography } = require('@material-ui/core');

function App() {
	return (
		<div className='App'>
			<Grid container>
				<Grid item>
					<AppBar>
						<Toolbar>
							<Typography variant='h5'> My payment form </Typography>
						</Toolbar>
					</AppBar>
				</Grid>
				<Grid item container>
					<Grid item xs={0} sm={2} />
					<Grid item></Grid>
					<Grid item xs={0} sm={2} />
				</Grid>
			</Grid>
		</div>
	);
}

export default App;
