import React from 'react';
import image from '../../../Image/image.jpg'
import image1 from '../../../Image/image.jpg'
import image2 from '../../../Image/image.jpg'


import ProductDetails from '../ProductDetails/ProductDetails';


const ProductData=[
    {
        Price:'$256',
        name:'ms 12321',
        Brand:'IPhone',
        image:image,
        
        
    },
    {
        Price:'$286',
        name:'St 25564',
        Brand:'IPhone',
        image:image2
        
        
    },
    {
        Price:'$300',
        name:'PT 4521',
        Brand:'IPhone',
        image:image1
        
        
    }
]
const Trainer = () => {
    return (
        <section >
             <div className="text-center mt-3 my-5 "> 
             <h4 className="text-info fw-bold">Popular Model</h4>
             </div>
             <div className="row d-flex justify-content-center">
               {
               ProductData.map(product=><ProductDetails product={product}></ProductDetails> )  
               }
               </div>
        </section>
    );
};

export default Trainer;