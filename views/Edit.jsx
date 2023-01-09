const React = require('react');
// As you can see we are using the app layout
const DefaultLayout = require('./Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            <DefaultLayout title={"Edit "+ this.props.product.title}>
                {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
                {/* form is not complete we will do that below*/}
                <form action={`/products/${this.props.product._id}?_method=PUT`} method="POST">
                    <label for="title">Name:</label>
                    <input type="text" id="title" name="title" defaultValue={this.props.product.title} ></input><br />
                    {/* Image: <input type="text" name="image" defaultValue={this.props.product.image} /><br /> */}
                    <label for="imagePath">Image-Location:</label>
                    <input type="text" id="imagePath" name="imagePath" defaultValue={this.props.product.imagePath}></input><br />
                    <label for="price">Price:</label>
                    <input type="double" id="price" name="price" min ="0.01" max="999.99" defaultValue={this.props.product.price}></input><br />
                    <label for="quantity">Quantity:</label>
                    <input type="number" id="quantity" name="quantity" min="0" max="999" defaultValue={this.props.product.quantity}></input><br />
                    <label for="price_description">Price Description:</label>
                    <input type="text" id="price_description" name="price_description" defaultValue={this.props.product.price_description}></input><br />
                    <label for="product_description">Product Description:</label>
                    <input type="text" id="product_description" name="product_description" defaultValue={this.props.product.product_description}></input><br />
                    <label for="category">Category:</label>
                    <input type="checkbox" id="category" name="category" defaultValue={this.props.product.category} defaultChecked/>
                                        <br />
                    <input type="submit" value="Submit Changes" />
                </form>
                <a href="/products">BACK</a>
            </DefaultLayout>
        )
    }
}
module.exports = Edit;