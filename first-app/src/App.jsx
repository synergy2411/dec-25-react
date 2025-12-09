import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./Components/Expenses/Expenses";
import FormDemo from "./Components/Demo/FormDemo";
import UseEffectDemo from "./Components/Demo/UseEffectDemo";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">App Works!!!</h1>
      {/* <Output title="Some Awesome Title" /> */}
      {/* <FormDemo /> */}
      <UseEffectDemo />

      <hr />
      {/* <Expenses /> */}
    </div>
  );
}

export default App;
