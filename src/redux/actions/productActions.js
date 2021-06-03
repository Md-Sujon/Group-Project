export const addToProduct = (payload)=>{
     return{
         type: 'ADD_TO_PRODUCT',
         payload,
     }
 }

 export const removeToProduct = (payload)=>{
    return{
        type: 'REMOVE_TO_PRODUCT',
        payload,
    }
}