import rootReducer from "../RootReducer/RootReducer";

const myLogger=(store)=>(next)=>(action)=>{
    console.log(`Action Types: ${JSON.stringify(action)}`);
    console.log(`Before State: ${JSON.stringify(store.getState())}`);
    console.log(`Upcoming State: ${JSON.stringify([action].reduce(rootReducer, store.getState()))}`)

    return next(action);
}


export default myLogger;