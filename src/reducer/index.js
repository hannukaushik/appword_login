//const initialState={ userData:[{user:"",password:"",loggedIn:false,error:""}]};
const initialState={user:"",password:"",loggedIn:false,error:"",registerData:[]};
const reducer=(state=initialState,actions)=>{
    if (actions.type == "createUser"){
        return {...state,user:actions.payload}
    }
    if (actions.type == "setUser"){
        return {...state,user:actions.payload}
    }
    if (actions.type == "setPassword"){
        {console.log("this is data",actions.payload)}
        return {...state,password:actions.payload}
    }
    if (actions.type == "addToStore"){
        {console.log("this is data",actions.payload)}
        const userExists = state.registerData.some(l => l.username === actions.payload.username)
        if (userExists){
            return{...state}
        }
        return { ...state,registerData: [...state.registerData, actions.payload]};
    }
    if (actions.type == "loginInUser")
        {
            const userExists = state.registerData.some(l => l.username === actions.payload.username)
            
            
            if (userExists){
                console.log("index is",actions.payload.username)
                let user_ = state.registerData.find(item => item.username === actions.payload.username);
                console.log(user_.password);
                if (actions.payload.username===user_.username &&
                    actions.payload.password===user_.password)
                    return  {...state,loggedIn:true}
            }
        else{
                    return  {...state,error:'not valid user'} 
                }
        }
    if (actions.type == "logOutUser"){
            
            return {...state,loggedIn:false}
        }
    return state;
}

export default reducer;