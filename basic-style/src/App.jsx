import { FaBeer } from 'react-icons/fa';
import '././index.css'
const App = () => {
  let style ={ textAlign: 'center', fontSize: '2rem'  ,color:"magenta", backgroundColor:"teal", };  return (
    <div style={style}>
      <h1>Style Here <FaBeer className='fb'/> </h1>
    </div>
  )
}

export default App
