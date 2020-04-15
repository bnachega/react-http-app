import React from "react";
import Greeter from "./GreeterClass"
import Greeter1 from "./GreeterFunctional"

function App() {
  return (
    <main className="container">

      <Greeter companyName="With great power comes great responsibility!!"/>
      <Greeter1/>
    </main>
  );
}

export default App;
