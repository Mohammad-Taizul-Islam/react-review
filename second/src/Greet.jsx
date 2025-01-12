const Greet = () => {
    const name = 'Miya';
    const date = new Date();
  return (
    <div>
      <h1>Hello {name}!!</h1>
      <p>Today Is : {date.getDate()}</p>
    </div>
  )
}

export default Greet
