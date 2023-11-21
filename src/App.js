import HomePage from "./components/HomePage";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
        <HomePage />
      </Router>
    </div>
  );
}

export default App;
