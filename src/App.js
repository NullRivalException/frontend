import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"

export default function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}