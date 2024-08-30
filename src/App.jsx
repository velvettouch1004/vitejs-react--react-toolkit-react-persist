import "./App.css";
import Todolist from "./components/todolist";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Todolist />
      </PersistGate>
    </Provider>
  );
}

export default App;
