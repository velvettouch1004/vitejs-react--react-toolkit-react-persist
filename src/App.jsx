import "./App.css";
import Todolist from "./components/todolist";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Todolist />
    </Provider>
  );
}

export default App;
