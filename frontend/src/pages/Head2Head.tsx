import Head2HeaderPlayer1 from "../cmps/Head2Head/Head2HeaderPlayer1";
import Head2HeaderPlayer2 from "../cmps/Head2Head/Head2HeaderPlayer2";
// import { setPlayerH2H } from "../store/actions/generalInfo.actions";
import PolygonChart from "../cmps/Charts/PolygonChart";
import { useState } from "react";
import PlayersList from "../cmps/Players/PlayersList";
import { useSelector } from "react-redux";
import { setPlayer1 } from "../store/actions/generalInfo.actions";

export default function Head2Head() {
  const playerH2H = useSelector((state) => state.fplModule.player1);

  const [searchMode, inSearchMode] = useState(false);
  const [h2hPlayer1, setH2HPlayer1] = useState(null);
  const [h2hPlayer2, setH2HPlayer2] = useState(null);
  const [currPlayer, SetCurrPlayer] = useState(0);

  async function getPlayer(player) {
    if (currPlayer === 0) {
      setH2HPlayer1(player);
      inSearchMode(!searchMode);
      await setPlayer1(player);
    } else if (currPlayer === 1) {
      inSearchMode(!searchMode);
      setH2HPlayer2(player);
    }
  }

  function ChangePlayer1() {
    inSearchMode(!searchMode);
    SetCurrPlayer(0);
  }

  function ChangePlayer2() {
    inSearchMode(!searchMode);
    SetCurrPlayer(1);
  }

  return (
    <div className="head2head">
      <div className="head2head-player">
        <button onClick={ChangePlayer1}>Choose Player</button>
        <button onClick={ChangePlayer2}>Choose Player</button>
      </div>
      {searchMode ? (
        <PlayersList getPlayer={getPlayer} currPlayer={currPlayer} />
      ) : (
        <div className="player-card-container">
          <Head2HeaderPlayer1 player={h2hPlayer1} />
          <Head2HeaderPlayer2 player={h2hPlayer2} />
        </div>
      )}
      {h2hPlayer1 && h2hPlayer2 ? (
        <PolygonChart player1={h2hPlayer1} player2={h2hPlayer2} />
      ) : (
        <div></div>
      )}
    </div>
  );
}
