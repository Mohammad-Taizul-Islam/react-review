
import products from "./data"

const Products = () => {
    // const products = [
    //     {
    //     id: 1,
    //     name: 'Laptop',
    //     price: 1000,
    //     description: 'New Macbook Pro'
    //     },
    //     {
    //     id: 2,
    //     name: 'Mobile Phone',
    //     price: 500,
    //     description: 'New iPhone'
    //     },
    //     {
    //     id: 3,
    //     name: 'Tablet',
    //     price: 300,
    //     description: 'New iPad'

    // }];
  return (
    <div>
    <h1>Product List</h1>
   {
      products.map((product) => (
        <ul key={Math.random()}>
          <li>
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.description}</p>
          </li>
        </ul>
      ))
   }
  </div>
  )
}

export default Products
