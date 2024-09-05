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
import PlayersList from "./cmps/Players/PlayersList";

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
          {/* Root route */}
          <Route path="/" element={<Dashboard />} />

          {/* Teams route with nested PlayersList */}
          <Route path="/teams" element={<Teams />}/>
            <Route path="/teams/:teamId" element={<TeamsPage />}>
              <Route path=":playerId" element={<PlayersList />} >
            </Route>
          </Route>

          {/* Players route with nested PlayerDetail */}
          <Route path="/players" element={<Players />}>
            <Route path=":playerId" element={<PlayersList />} />
          </Route>

          {/* Head2Head route with nested dynamic IDs */}
          <Route path="/Head2Head" element={<Head2Head />}>
            <Route path=":playerId" element={<Head2Head />} />
            <Route path=":playerId/:PlayerSubId" element={<Head2Head />} />
          </Route>

          {/* Default route for unmatched paths */}
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
