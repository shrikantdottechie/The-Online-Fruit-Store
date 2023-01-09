// const React = require('react');

// class Index extends React.Component {
//     render() {
//         //const { product } = this.props;
//         return (
//             <div>
//                 <nav>
//                     <a href="/products/new">Create a New Fruit</a>
//                 </nav>
//                 <h1>Fruits Index Page</h1>
//                 <ul>
//                     {this.props.product.map((item, id) => {
//                         return (
//                             <li>
//                                 <>
//                                 The
//                                 {' '}
//                                 <a href={`/products/${item.id}`}>
//                                     {item.name}
//                                 </a>
//                                 {' '}
//                                 is {item.color}
//                                 <br></br>
//                                 {' '}
//                                 {(item.readyToEat) ? ` It is ready to eat ` : ` It is not ready to eat`}
//                                 <br></br>
//                                 </>
//                             </li>
//                         );
//                     })}
//                 </ul>
//             </div>
//         );
//     }
// }
// module.exports = Index;

const React = require('react')
const DefaultLayout = require('./Default')

class Index extends React.Component {
    render() {
        const { product } = this.props
        return (
            <DefaultLayout title={"Product(s) Index Page"}>
                <nav>
                    <a href="/products/new">Add a New Product</a>
                </nav>
                <ul>
                    {product.map((item, i) => {
                        return (
                            <li>
                                The{' '}
                                <a href={`/products/${item.id}`}>
                                    {item.title}
                                </a>
                                {' '}
                                is 
                                <br></br>
                                
                                <img src ={"/public" + item.imagePath.replace(".jpeg",".jpg")}  />
                                 
                                <br></br>
                                {/* {item.readyToEat
                                    ? `It is ready to eat`
                                    : `It is not ready to eat`} */}
                                <br></br>
                                <a href={`/products/${item._id}/edit`}>Edit This Product</a>
                                <br></br>
                                {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
                                <form action={`/products/${item._id}?_method=DELETE`} method="POST">
                                    <input type="submit" value="DELETE" />
                                </form>
                                <br></br>
                            </li>
                        );
                    })}
                </ul>
            </DefaultLayout>
        );
    }
}
module.exports = Index;