const myLogger=(store)=>(next)=>(action)=>{

    return next(action);
}


export default myLogger;