
import { useState } from 'react';
import ButtonParent from './ButtonParent'

const App = () => {
  const [message, setMessage] = useState("");
  const dataFromParentComponent = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>App Component</h1>
      <p>Data From Parent Component: {message}</p>
      <ButtonParent dataToAppComponent={dataFromParentComponent} />
    </div>
  );
}
export default App


