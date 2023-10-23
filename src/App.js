import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './Pages/auth/LoginPage';
import Dashboard from './Pages/Dashboard/DashboardPage';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<LoginPage/>}/> */}
      <Route path="/" element={<Dashboard/>}/> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
