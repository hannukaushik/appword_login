
export const createUser =(user)=>{
   return {type:"createUser",payload:user}
}

export const setUser =(user)=>{
    return {type:"setUser",payload:user}
 }
 export const setPassword =(user)=>{
    
    return {type:"setPassword",payload:user}
 }
 export const addToStore =(username,password)=>{
    console.log("Add to store",username,password)
    let user={username:username,password:password}
    console.log("Add to store",user)
    return {type:"addToStore",payload:user}
 }

 export const loginInUser=(username,password)=>{
    let user={username:username,password:password}
    console.log("login user",user)
    
    return {type:"loginInUser",payload:user}
}
export const logOutUser=()=>{    
    return {type:"logOutUser"}
}