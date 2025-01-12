import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Greet from './Greet'
import Products from './Products'
import List from './List'
import UserInfo from './UserInfo'
import UserList from './UserList'
import UserWProps from './UserWProps'
import App from './App'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Greet />
    <Products/>
    <List/>
    <UserList/>
    <UserInfo/>
    <UserWProps name="Huxen" age={23} email="hoxen@gmail.com" isMarried={false} locations={"Dhaka"}  hobbies={["Coding ","Watching Documents in Science ","Sleeping "]} img={"https://media.istockphoto.com/id/1493445485/photo/smiling-black-woman-using-touchpad-by-the-window-at-home.jpg?s=1024x1024&w=is&k=20&c=yxwmpelzL_MhtNyXbPBO71hOj3nb63s-_R9T-A1EOdU="}/> */}
    <App/>
  </StrictMode>,
)
