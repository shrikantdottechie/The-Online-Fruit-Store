const React = require("react");

const result = 0;
function noStock() {
  return <h1>OUT OF STOCK!</h1>
}
function stock() {
 
    if (product.stock > 0) {
      return <h1>{product.stock -= product.quantity} items remaining</h1>
    }
   
}
function itemStock(props) {
  const isStock = props.isStock;
  //  if (isStock){
  //    return <stock/>;
  //  }
  //  return <noStock/>;
  return (
    <>
      {isStock ? <stock /> : <noStock />}
    </>
  );
}
class Show extends React.Component {

  render() {
    const { product } = this.props;
    return (
        <div>
          <h1>Product(s) show page</h1>
          <>
          
            <section class="show">
            <img src={"/public" + product.imagePath.replace('.jpeg', ".jpg")}/>
              <table class="table">
                <tr>
                  {/* <th>id</th> */}
                  <th> Title </th>
                  <th>       </th>
                  <th>Quantity </th>
                  <th> Price </th>
                </tr>
                <>
                  {
                    <tr>

                      <td> <h2> {product.title} </h2> </td>
                      <td>   <h4> =========   </h4>                        </td>
                      <td> <h2> {Number.parseInt(product.quantity)} </h2></td>
                      {product.quantity > 0 &&
                        <td> <h2> {Number.parseFloat(product.price).toFixed(2) * product.quantity} </h2> </td>
                      } 
                      
                      
                    </tr>
                  }
                </>
              </table>
            </section>
          </>
          <form action={`/products/${product._id}?_method=PUT`} method="POST">
            <input type="submit" value="BUY" />
          </form>
          <itemStock isStock={true}>{product.stock -= product.quantity} items available</itemStock>
          <br />

          <br></br>
          {product.stock === 0 &&
            <itemStock isStock={false}>OUT OF STOCK!</itemStock>
          }



          <br />
          <a href={`/products/${product._id}/edit`}>Edit This Product</a>
          {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}
          <form action={`/products/${product._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE" />
          </form>
          <nav>
            <a href='/products/'>Back to products</a>
          </nav>
        </div >
    );
  }
}
module.exports = Show;