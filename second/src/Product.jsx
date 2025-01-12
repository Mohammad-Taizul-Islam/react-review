/* eslint-disable react/prop-types */
// import PropTypes from "prop-types"


// const Product = (props) => {
//   return (
//     <div>
//         <h1>Product Name : {props.name}</h1>
//         <h4>Product Price : {props.price}</h4>
//         <p>Product Descriptions : {props.description}</p>
//         <p>Products Category : {props.category}</p>

//     </div>
//   )
// }
// Product.propTypes = {
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     description: PropTypes.string.isRequired,
//     category: PropTypes.string.isRequired
// }
// export default Product

const Product = ({name,price} )=> {
  return (
    <div>
      <h1>Product Name : {name} </h1>
      <h4>Product Price :{price}  </h4>
    </div>
  )
}

export default Product
