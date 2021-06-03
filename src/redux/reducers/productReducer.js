const initialState = {
    productList: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'ADD_TO_PRODUCT':{
            return state
        }

        case 'REMOVE_TO_PRODUCT':{
            return state
        }

        default :{
            return state
        }
 


    }

}
export default productReducer