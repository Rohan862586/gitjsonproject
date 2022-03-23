import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './component/Table';
import { store } from './app/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <div className="App">
      <Provider store={store}>   
      <Table/>
      </Provider>
    </div>
  );
}

export default App;


