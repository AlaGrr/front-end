import * as React from "react";
import Button from "@mui/material";
import Stack from "@mui/material/Stack";
import { Chip, Box } from "@mui/material";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], dataPlayer: [], joueur: [], results: "", value: "" };
  }

  componentDidMount() {
    fetch("Game/envoiData")
      .then((dataPlayers) => dataPlayers.json())
      .then((dataPlayers) => this.setState({ data: dataPlayers }));
   
     /* fetch("Game/getEnnemi")
      .then((dataPlayers) => dataPlayers.json())
      .then((dataPlayers) => this.setState({ data: dataPlayers }));*/
  }

  handleChangeInputSearch(e) {
    const valeur = e.target.value;
    this.setState({ value: valeur });
  }

  handleClickFight(players) {
  
    fetch("Game/combatMonstres/" + players.id + "/" + localStorage.getItem("id"))
    .then((dataPlayers) => dataPlayers.text())
    .then((dataPlayers) => 
    {this.setState({results:dataPlayers})
    ;console.log(this.state.results)});
  }



  render() {
    if (this.state.data.length === 0) {
      return "Loading...";
    }
    console.log("result");
    console.log(this.state.results);
    /*const lowerCaseValue = this.state.value;
    console.log("value"+this.state.value);
    console.log("lower"+lowerCaseValue);
    const filteredPlayers = this.state.data.filter(
      console.log(this.state.data),
      (players) => players.niveau.indexOf(lowerCaseValue) !== -1
    );*/

    const listPlayers = this.state.data.map((players) => (
      <li className="elementDeChaqueJoueur">
        <span className="lvls">({players.nom})</span>
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
            <ul className="tout">{listPlayers}</ul>

          </div>
        </div>
      </div>
    );
  }
}
export default Game;