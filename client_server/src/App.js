import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Layout from "./components/Layout/Layout";
import AdminDashboard from "./views/AdminDashboard";
import CreateCollection from "./views/CreateCollection";

import Home from "./views/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="create-collection" element={<CreateCollection />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
