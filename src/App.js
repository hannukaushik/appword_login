import logo from './logo.svg';
import './App.css';
import LoginContainer from "./container/LoginContainer"
import Login from './components/login';
import { Component } from 'react'; 
import { connect, useDispatch } from 'react-redux';
import { createUser, setUser, setPassword, addToStore,loginInUser,logOutUser } from './components/actions';

class App extends Component {
  
    
    // handleSubmitt(event) {
    //   //event.preventDefault()
    //   const data={this.state.userName:{this.props.user},this.state.password=this.props.password}
    //   {console.log("yoyo",data)}
    // }//   this.setState({message:true}):this.setState({message:false}))
    //   //  addToStore({userName:this.props.user,password:this.props.password } )
       
    // // }

  render() {
    console.log("props recieved from state",this.props);

    const hellostyle={
      textAlign: "center",
    marginTop: "200px",
    textShadow: "1px 4px 44px #f10404",
    fontSize: "50px"
    }
    const jsx = <div style={hellostyle}> Hello </div>;

    const style={
      padding:"30px"
    };
    const logout_style={
      display:'block',
      margin:'auto',
      marginRight:'0px'
    };

    if (this.props.loggedIn){
      return(
        <div style={style}> 
        <button onClick={()=>{this.props.logOutUser()}} style={logout_style}>
          LOGOUT
          </button>
          {jsx}
        </div>
      )
    }
    else{
    return <div ><Login username={this.props.user}
              password={this.props.password}
              error={this.props.error}
              handleUsername={(event)=> {this.props.setUser(event.target.value)}}
              
              handlePassword={(event)=> {this.props.setPassword(event.target.value)}}
              handleSubmit={()=>{this.props.addToStore(this.props.user,this.props.password)}}
              handlelogin={()=>{this.props.loginInUser(this.props.user,this.props.password)}}
              //this.props.addToStore({username:user})
                //this.props.createUser("Hannu");
                //this.props.addToStore(this.handleSubmit());
                
                //
                
                
              
          
              
            />  </div>
    
    }
  }
}
const mapStateToProps=(state)=>{
  console.log("state recieved from reduser",state)
  const{user,password,loggedIn,error,registerData}=state;
  return{user,password,loggedIn,error,registerData}
}

// const mapDispatchToProps=dispatch=>{
//   addToStoreHandler:data=>dispatch(addToStore(data))
// }
//export default connect(mapStateToProps,mapDispatchToProps)(App);
export default connect(mapStateToProps,{createUser,setUser,setPassword,addToStore,loginInUser,logOutUser})(App);
