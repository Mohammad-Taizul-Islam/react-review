import Greeting from './Greeting'
import UserStatus from './UserStatus'
import Weather from './Weather'

const App = () => {
  return (
    <div>
      <Greeting timeOfDay="morning"/>
      <UserStatus loggenIn={true} isAdmin={true}/>
      <Weather temperature={20}/>
    </div>
  )
}

export default App
