const List = () => {
const number=[1,2,3,4,5];
  
  return (
   <main>
       {
         <ul>
            {number.map((num) => (
            <li key={num} style={{
                color: num % 2 === 0 ? 'red' : 'blue',
                fontSize: num % 2 === 0 ? '40px' : '30px',
            }}>{num}</li>
            ))}
        </ul>
       }
   </main>
  )
}

export  default List

