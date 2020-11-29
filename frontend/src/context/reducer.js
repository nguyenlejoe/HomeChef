export const initialState = {
    username:"",
    items:[],
    qty:0,
    token:null,
    email:"",
    product:"",
    orderProducts:[],
    img:""

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

        case"userOrder":
        return{
            ...state,
            orderProducts:[...state.orderProducts, action.orderProducts],

        }

        case"userInfo":
        return{
            ...state,
            token:action.token,
            email:action.email,
            username:action.username
        }

        case"addCart":
        return{
            ...state, 
            items:[...state.items, action.items],
            qty: action.qty + state.qty,
            
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