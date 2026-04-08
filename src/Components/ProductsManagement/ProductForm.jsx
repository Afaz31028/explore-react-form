import React from 'react';

const ProductForm = ({handleAddProducts}) => {

    const handleSubmit=e=>{
        e.preventDefault();
        const name= e.target.name.value;
        const price= e.target.price.value;
        const qty= e.target.quantity.value;

        // console.log(name,price, qty)
        const newProduct={
            name,
            price,
            qty
        }
        // console.log(newProduct)
        handleAddProducts(newProduct);
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product Name' /><br />
                <input type="text" name="price" placeholder='Product Price' /><br />
                <input type="text" name="quantity" placeholder='Product Quantity' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;