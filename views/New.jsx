const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Add New Product page</h1>
                {/* NOTE: action will be the route, method will be the HTTP verb */}
                <form action="/products" method="POST">
                    <label for="title">Product Name:</label>
                    <input type="text" id="title" name="title" placeholder="productName"></input><br />
                    {/* Image: <input type="text" name="image" /><br /> */}
                    <label for="imagePath">Product Image Location:</label>
                    <input type="text"
                        id="imagePath" name="imagePath"
                        placeholder="Image Location"></input>
                    <label for="price">Price:</label>
                    <input type="double" id="price" name="price" min="0.01" max="999.99" placeholder="productPrice"></input>
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="0" max="999" placeholder="productQuantity"></input>
                    <label for="price_description">Price Description:</label>
                    <input type="text" id="price_description" name="price_description" placeholder="productPriceDescription"></input>
                    <label for="product_description">Product Description:</label>
                    <input type="text" id="product_description" name="product_description" placeholder="productDescription"></input>
                    <label for="fruits">Fruits</label>

                    <input type="checkbox" id="fruits" name="fruits" checked/>
                        <label for="vegetables">Vegetables</label>

                        <input type="checkbox" id="vegetables" name="vegetables"/>
                            <label for="personalCare">Personal Care</label>

                            <input type="checkbox" id="personalCare" name="personalCare"/>

                                {/* Image: <input type="image" id="image" alt="product"
                        src="./public/images/products/avocados.jpeg"></input> */}
                                {/* Is Ready To Eat: <input type="checkbox" name="readyToEat" /><br /> */}
                                <input type="submit" name="" value="Add a new Product" />
                            </form>
                        </div>
                        );
    }
}

                        module.exports = New;