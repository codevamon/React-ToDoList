import "./App.css";
import List from "./components/List/List";

function App() {
  return (
    <>
      <header>
        <h1 className="title">ToDo List App</h1>
        <h2>Create, Delete, Sort, and View the things you have to do.</h2>
      </header>
      <List></List>
    </>
  );
}

export default App;
