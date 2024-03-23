import { Route, HashRouter as Router, Routes } from "react-router-dom";
import AppHeader from "./cmps/AppHeader/AppHeader";
import "./assets/scss/global.scss";
import "react-loading-skeleton/dist/skeleton.css";
import Teams from "./pages/Teams";
import Players from "./pages/Players";
import Dashboard from "./pages/Dashboard";
import { loadGeneralInfo } from "./store/actions/generalInfo.actions";
import { useEffect } from "react";
import Head2Head from "./pages/Head2Head";
import TeamsPage from "./cmps/Teams/TeamsPage";
import MobileAppHeader from "./cmps/AppHeader/MobileAppHeader";

function App() {
  useEffect(() => {
    loadGeneralInfo();
  }, []);
  return (
    <Router>
      <AppHeader />
      <MobileAppHeader />

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:teamId" element={<TeamsPage />} />
          <Route path="/players" element={<Players />} />
          <Route path="/Head2Head" element={<Head2Head />} />
        </Routes>
      </main>

      <footer>{/* <section>CoffeeRights 2023 &copy;</section> */}</footer>
    </Router>
  );
}

export default App;
