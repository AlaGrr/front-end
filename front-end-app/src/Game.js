import * as React from "react";
import Button from "@mui/material";
import Stack from "@mui/material/Stack";
import { Chip, Box } from "@mui/material";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], dataPlayer: [], joueur:[], results:"", value:""};
  }

  componentDidMount() {
    fetch("Game/envoiData")
      .then((dataPlayers) => dataPlayers.json())
      .then((dataPlayers) => this.setState({ data: dataPlayers }));
  }

  handleChangeInputSearch(e) {
    const value = e.target.value;
    this.setState({ value });
  }

  handleClickFight(players) {
    this.setState({dataPlayer : players});
    this.setState({results : "Game/combatMonstres/"+{dataPlayer}})

  }

  render() {
    if (this.state.data.length === 0) {
      return "Loading...";
    }

    const lowerCaseValue = this.state.value.toLowerCase();
    const filteredPlayers = this.state.data.filter(
      (players) => players.niveau.toLowerCase().indexOf(lowerCaseValue) !== -1
    );
    const listPlayers = filteredPlayers.map((players) => (
      <li className="elementDeChaqueJoueur">
        <span className="xperiments">{players.experience} </span>
        <span className="lvls">({players.niveau})</span>
        <button
          variant="outlined"
          color="success"
          className="goCbt"
          onClick={() => this.handleClickFight(players)}
        >
          Combattre
        </button>
      </li>
    ));

      return (
        <div className="Resultat">
          <form>
            <label>
              Recherche :
              <input
                type="text"
                value={this.state.data.niveau}
                onChange={(e) => this.handleChangeInputSearch(e)}
              />
            </label>
          </form>
          <div className="Retour">
            <h4>Liste des joueurs</h4>
            <div className="Lists">
              <ul className="tout">{dataPlayers}</ul>
            </div>
          </div>
        </div>
      );
  }
}
export default Game;
