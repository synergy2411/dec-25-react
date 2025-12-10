import "bootstrap/dist/css/bootstrap.min.css";
import Parent from "./Components/Demo/Parent";
function App() {
  return (
    <div className="container">
      <h1 className="text-center">App Works!!!</h1>
      {/* <Output title="Some Awesome Title" /> */}
      {/* <FormDemo /> */}
      {/* <UseEffectDemo /> */}

      <hr />
      <Parent />

      {/* <UseReducerDemo /> */}

      {/* <AuthProvider>
        <ContextParent />
      </AuthProvider> */}

      {/* <Expenses /> */}
    </div>
  );
}

export default App;
