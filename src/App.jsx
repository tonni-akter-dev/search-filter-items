import Component5 from "./comnponents/component5/component5";
import "./App.css";
import Component4 from "./comnponents/Component4/Component4";
import Component7 from "./comnponents/Component7/Component7";
import Component6 from "./comnponents/Component6/Component6";

function App() {
  return (
    <div className="container">
      <h1 className="text-center">Search filter Components</h1>
      <div className="row">
        <div className="col">
          <Component4 />
        </div>
        <div className="col">
          <Component6 />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Component5 />
        </div>
        <div className="col">
          <Component7 />
        </div>
      </div>
    </div>
  );
}

export default App;
