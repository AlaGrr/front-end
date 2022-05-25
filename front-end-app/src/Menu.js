import React from 'react';
import { Link } from "react-router-dom";

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: "",
            selectedRestaurant: null,
            form: {
                item1: null, item2: null, item3: null, item4: null, item5: null,
                item6: null, item7: null, item8: null, item9: null, item10: null,
            }
        };
    }

    componentDidMount() {
        fetch("Delevery/envoiData")
            .then((dataRestaurant) => dataRestaurant.json())
            .then((dataRestaurant) => this.setState({ data: dataRestaurant }));
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleClickUnique(menu) {
        this.setState({ selectedRestaurant: menu });
    }

    handleClickListe() {
        this.setState({ selectedRestaurant: null });
    }

    showMenu() {
        for (let i = 0; i < 10; i++) {
            <div>
                <input type="checkbox" />
                <label>
                    {this.state.selectedRestaurant.menu.item + i}
                </label>
            </div>
        }
    }

    render() {
        if (this.state.data.length === 0) {
            return "Loading";
        }
        const filteredRestaurant = this.state.data.filter(
            (menu) => menu.nomResto.indexOf(this.state.value) !== -1
        );
        const listeRestaurantName = filteredRestaurant.map((menu) => (
            <li className="listeDep" key={menu.idResto}>
                <p>
                    Nom : {menu.nomResto}<br />{" Addresse : "}{menu.adresseResto}
                    <br />
                    <button onClick={() => this.handleClickUnique(menu)}>
                        Menu du restaurant
                    </button>
                </p>
            </li>
        ));
        return (
            <div>
                {this.state.selectedRestaurant === null ? (
                    <div>
                        <input
                            type="text"
                            value={this.state.data.nomResto}
                            onChange={(e) => this.handleChange(e)}
                        />
                        <ul>{listeRestaurantName}</ul>
                    </div>
                ) : (
                    <div>
                        <h1>{this.state.selectedRestaurant.nomResto}</h1>
                        {this.state.selectedRestaurant.adresseResto}
                        <br />
                        <h2>Menu du restaurant</h2>
                        <div>
                            <input type="checkbox" name="item1" />
                            <label>
                                {this.state.selectedRestaurant.menu.item1}
                            </label>
                        </div><br />
                        <div>
                            <input type="checkbox" name="item2" />
                            <label>
                                {this.state.selectedRestaurant.menu.item2}
                            </label>
                        </div><br />
                        <div>
                            <input type="checkbox" name="item3" />
                            <label>
                                {this.state.selectedRestaurant.menu.item3}
                            </label>
                        </div><br />
                        <div>
                            <input type="checkbox" name="item4" />
                            <label>
                                {this.state.selectedRestaurant.menu.item4}
                            </label>
                        </div><br />
                        <div>
                            <input type="checkbox" name="item5" />
                            <label>
                                {this.state.selectedRestaurant.menu.item5}
                            </label>
                        </div><br />
                        <div>
                            <input type="checkbox" name="item6" />
                            <label>
                                {this.state.selectedRestaurant.menu.item6}
                            </label>
                        </div><br />
                        <div>
                            <input type="checkbox" name="item7" />
                            <label>
                                {this.state.selectedRestaurant.menu.item7}
                            </label>
                        </div><br />
                        <div>
                            <input type="checkbox" name="item8" />
                            <label>
                                {this.state.selectedRestaurant.menu.item8}
                            </label>
                        </div><br />
                        <div>
                            <input type="checkbox" name="item9" />
                            <label>
                                {this.state.selectedRestaurant.menu.item9}
                            </label>
                        </div><br />
                        <div>
                            <input type="checkbox" name="item10" />
                            <label>
                                {this.state.selectedRestaurant.menu.item10}
                            </label>
                        </div><br />
                        <Link to="/commande" className='command'>Commander</Link>
                        <button onClick={() => this.handleClickListe()}>Retour</button>
                    </div>
                )}
            </div>
        );
    }
}

export default Menu;