
import "./App.css";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import Footer from "./components/Footer";


function App() {
  return (<>
    <div className="App__container">
      <Header/>
      <InputTodo/>
      <Footer/>
    </div>
    </>);
}

export default App;
