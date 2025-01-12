
// import Person from "./Person"
// import Product from "./Product"
import Card from "./Card"
import Cart from "./Cart"

const ValidPassword = ()=>{
  return(
    <div>
      <h1>Password is valid</h1>
    </div>)
}
const InvalidPassword = ()=>{

  return(
    <div>
      <h1>Password is Invalid</h1>
    </div>)
}

const Password = ({isValid}) =>{
{
  // if(isValid){
  //   return <ValidPassword/>
  // }
  // else{
  //   return <InvalidPassword/>
  // }
  return isValid ? <ValidPassword/> : <InvalidPassword/>
}
}
const App = () => {
  return (
    <div>

      {/* <Person name="Alice" age={28} /> */}

      {/* <Product name="Laptop" price={1000} description="Dell Laptop" category="Electronics" />
     
    */}
     {/* <Product name="Smartphone" price={800} /> */}

     <Card>
        <h1>Card 1</h1>
        <h4>Card 1 descriptions</h4>
      </Card>
      <Card>
        <h1>Card 2</h1>
        <h4>Card 2 descriptions</h4>
      </Card>
      <Card>
        <h1>Card 3</h1>
        <h4>Card 3 descriptions</h4>
      </Card>
      <Card>
        <h1>Card 4</h1>
        <h4>Card 4 descriptions</h4>
      </Card>

      <section>
        <Password isValid={true}/>
        <Password isValid={false}/>
      </section>
      <Cart />
     
     </div>
  )
}

export default App
