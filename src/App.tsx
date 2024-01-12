import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [allerVisible, setAllertVisibility] = useState(false);
  return (
    <div>
      {allerVisible && (
        <Alert onClose={() => setAllertVisibility(false)}>Sample</Alert>
      )}
      <Button color="danger" onClick={() => setAllertVisibility(true)}>
        Sample
      </Button>
    </div>
  );
}

export default App;
