import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductsManagent = () => {

    const [products, setProducts]= useState([]);

    const handleAddProducts=(newProduct)=>{
        const productsArray= [...products, newProduct];
        setProducts(productsArray);
    }

    return (
        <div>
            <ProductForm handleAddProducts={handleAddProducts}></ProductForm>
            <ProductTable products={products}></ProductTable>
        </div>
    );
};

export default ProductsManagent;