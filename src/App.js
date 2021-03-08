import { Provider } from "react-redux";
import { store } from "./redux/store";
import Activity from "./components/Activity";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Activity />
      </div>
    </Provider>
  );
}

export default App;
