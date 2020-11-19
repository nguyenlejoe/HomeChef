export const initialState = {
    username:"",
    items:[],
    token:null,
    email:""
}

export const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){
        case"change":
        return{
            ...state,
            username:"test name"
        }

        case"userInfo":
        return{
            ...state,
            token:action.token,
            email:action.email
        }

        case"addCart":
        return{
            ...state, 
            items:[...state.items, action.items],
            qty:action.items.qty
        }
        default:
                return state;
    }
}