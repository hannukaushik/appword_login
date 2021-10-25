import React from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";
//import home from "./home";
//import { BRAND_NAME } from "../constants";
const Login=(props)=> {

  //   this.state = { username: "", password: "", authflag: 1 };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
    
  // handleChange(event) {
  //   this.setState({
  //     username: event.state.username,
  //     password: event.state.password,
  //   });
  // }
  
  //   event.preventDefault();
  //   if (
  //     this.state.username == "hannukaushik@gmail.com" &&
  //     this.state.password == "123"
  //   ) {
  //     {alert("Welcome")}
  //   } else {
  //     alert("Incorrect Credntials!");
  //   }
  // }
    const username={a:"",b:""}
    return (
      
      <div>
        {console.log("these are props",props)}
        <AppBar position="static" alignitems="center" color="primary">
          <Toolbar>
            <Grid container justifyContent="center" wrap="wrap">
              <Grid item>
                <Typography variant="h6">APPWORD</Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Grid container spacing={0} justifyContent="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="login-background"
              >
                <Grid item>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                </Grid>
                <Grid item>
                  <form>
                  {/* <form onSubmit={this.handleSubmit}> */}
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="username"
                          variant="outlined"
                          value={props.username}
                          onChange={props.handleUsername}
                          //value={this.state.username}
                          // onChange={(event) =>
                          //   this.setState({
                          //     [event.target.name]: event.target.value,
                          //   })
                          // }
                          //required
                          //autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          value={props.password}
                          onChange={props.handlePassword}
                          //value={this.state.password}
                          // onChange={(event) =>
                          //   this.setState({
                          //     [event.target.name]: event.target.value,
                          //   })
                          // }
                          //required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="primary"
                          //type="submit"
                          className="button-block"
                          onClick={props.handlelogin}
                        >
                          {console.log("this are teh prosp",props)}
                          Submit
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          //type="submit"
                          className="button-block"
                          onClick={props.handleSubmit}
                        >
                          {console.log("this are teh prosp",props)}
                          Register
                        </Button>
                        <label>{props.error}</label>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  
}
export default Login;
