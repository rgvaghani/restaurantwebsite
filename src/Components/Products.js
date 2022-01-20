import React from 'react';
import ProductBox from './ProductBox';
import pimage1 from '../images/s1.png';
import pimage2 from '../images/s2.png';

const Products = () => {
    return (
        <div id='products'>
            <h1>CHOOSE & ENJOY</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <div className='a-container'>
                <ProductBox image={pimage1} title="Luger Burger"/>
                <ProductBox image={pimage2} title="Le Pigeon Burger"/>
                <ProductBox image={pimage1} title="Luger Burger"/>

            </div>
            
        </div>
    )
}

export default Products
