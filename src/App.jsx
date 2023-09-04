import Component5 from "./comnponents/component5/component5";
import "./App.css";
import Component4 from "./comnponents/Component4/Component4";
import Component7 from "./comnponents/Component7/Component7";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import Component6 from "./comnponents/Component6/Component6";

function App() {
  return (
    <>
      <h1>Search filter </h1>
      {/* <Component5 /> */}

      <div className="row">
        <div className="col">
          <Component4 />
        </div>
        <div className="col">
          <Component5 />
        </div>
        <div className="col">
          <Component7 />
        </div>
      </div>
      <Component6 />
    </>
  );
}

export default App;
