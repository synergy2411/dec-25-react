import "bootstrap/dist/css/bootstrap.min.css";
import ContextParent from "./Components/Demo/ContextParent";
import AuthProvider from "./Components/Demo/AuthProvider";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">App Works!!!</h1>
      {/* <Output title="Some Awesome Title" /> */}
      {/* <FormDemo /> */}
      {/* <UseEffectDemo /> */}

      <hr />

      <AuthProvider>
        <ContextParent />
      </AuthProvider>

      {/* <Expenses /> */}
    </div>
  );
}

export default App;
