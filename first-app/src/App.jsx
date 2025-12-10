import "bootstrap/dist/css/bootstrap.min.css";
import Parent from "./Components/Demo/Parent";
import Counter from "./Components/Demo/Counter";
import ErrorBoundary from "./Components/ErrorBoundary/ErrorBoundary";
function App() {
  return (
    <div className="container">
      <h1 className="text-center">App Works!!!</h1>
      {/* <Output title="Some Awesome Title" /> */}
      {/* <FormDemo /> */}
      {/* <UseEffectDemo /> */}

      <hr />
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>

      <hr />
      <ErrorBoundary>
        <Counter />
      </ErrorBoundary>
      {/* <Parent /> */}

      {/* <UseReducerDemo /> */}

      {/* <AuthProvider>
        <ContextParent />
      </AuthProvider> */}

      {/* <Expenses /> */}
    </div>
  );
}

export default App;
