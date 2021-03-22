import logo from './logo.svg';
import './App.css';
import Form from './Form/Form';
import { Route, Router, useHistory } from 'react-router';
import {BrowserRouter} from 'react-router-dom'

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <Form history={history}/>
      
    </div>
  );
}

export default App;
