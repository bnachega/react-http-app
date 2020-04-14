import React from "react";
import Greeter from "./GreeterClass"
import Greeter1 from "./GreeterFunctional"

function App() {
  return (
    <main className="container">
      <h1>Not Really Discover Banking Services</h1>

      <Greeter companyName="Discover's"/>
      <Greeter1/>
    </main>
  );
}

export default App;
