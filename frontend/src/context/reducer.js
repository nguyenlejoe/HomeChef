export const initialState = {
    username:"",
    items:[],
    qty:0,
    token:null,
    email:"",
    product:"",

}

export const reducer = (state, action) =>{
    console.log(action);

    switch(action.type){
        case"change":
        return{
            ...state,
            username:"test name"
        }
        
        case"createItem":
        return{
            ...state,
            product:action.product
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
            qty: action.qty + state.qty
        }

        case"emptycart":
        return{
            ...state, 
            items:action.items,
            qty: action.qty
        }
        
        default:
                return state;
    }
}