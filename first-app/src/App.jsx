import "bootstrap/dist/css/bootstrap.min.css";
import Expenses from "./Components/Expenses/Expenses";
import FormDemo from "./Components/Demo/FormDemo";
import UseEffectDemo from "./Components/Demo/UseEffectDemo";
import ContextParent from "./Components/Demo/ContextParent";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">App Works!!!</h1>
      {/* <Output title="Some Awesome Title" /> */}
      {/* <FormDemo /> */}
      {/* <UseEffectDemo /> */}

      <hr />
      <ContextParent />

      {/* <Expenses /> */}
    </div>
  );
}

export default App;
