import { NoBackpackRounded, TurnedInOutlined } from "@mui/icons-material";
import { MenuList } from "@mui/material";
import React, { Component } from "react";
import { render } from 'react-dom';
import { isConstructorDeclaration } from "typescript";


class RestoPlat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tousLesResto: [],
            restoChoisi: "",
            click: false,
            checkedMenu: [],
            commandeDisplay: false,  //afficher la commande 

            touslesMenusAvecnombre: [],
            menusSelected: [],
            payDisplay : false, 
            userAdresse: "NULL", 
            payementOptionDisplay: false, 
            likePoint : 0, 
            payementMethod: "cb", // valeur par défaut
            payWithLike: "oui", 
            isPayWithLikes:true,
            
           
           
        };

        this.affichageMenu = this.affichageMenu.bind(this);
        this.handleRetourClick = this.handleRetourClick.bind(this);
        this.handleSelectMenu = this.handleSelectMenu.bind(this);
        this.handleChangeCount = this.handleChangeCount.bind(this);
        //this.handleRemoveMenu= this.handleRemoveMenu.bind(this);
        this.getTotalPrice = this.getTotalPrice.bind(this);
        this.handlePay=this.handlePay.bind(this);
        this.handleUserAdresseInput=this.handleUserAdresseInput.bind(this);
        this.addUserAdresse= this.addUserAdresse.bind(this);
        this.handleChoosePayment=this.handleChoosePayment.bind(this);
        this.validateCommand=this.validateCommand.bind(this);
        this.handlePayWithLike=this.handlePayWithLike.bind(this);
    }

    componentDidMount() {

        const url1 = "http://localhost:8080/Delevery/recupResto";
        fetch(url1)
            .then((data) => data.json())
            .then((resto) => {
                this.setState({
                    tousLesResto: resto
                });
            });


        const url2 = "http://localhost:8080/Delevery/getTousLesMenus";
        fetch(url2)
            .then((data) => data.json())
            .then((menu) => {
                for (let i = 0; i < menu.length; i++) {
                    menu[i].nbr = 0;
                   
                }
                this.setState({
                    touslesMenusAvecnombre: menu,

                });
            });

     
  
    
    }

   tofetch(){
    const url10 = "http://localhost:8080/Network/getLikes/"+localStorage.getItem("id");
    fetch(url10)
        .then((data) => data.json())
        .then((resto) => {
            this.setState({
                likePoint: resto
            });
        });
   }

    affichageMenu(resto) {

   
        this.setState(
            {
                click: true,
                restoChoisi: resto
            }
        )
    }




    handleRetourClick() {
        this.setState(
            {
                click: false,

            }
        )
    }

    handleSelectMenu(event) {

        let item = event.target.value;
        this.state.checkedMenu.push(item);
        console.log(this.state.checkedMenu);
       

        this.setState(
            {
                commandeDisplay: true
            }
        )

        for (let i = 0; i < this.state.checkedMenu.length; i++) {

            for (let j = 0; j < this.state.touslesMenusAvecnombre.length; j++) {

                if (this.state.checkedMenu[this.state.checkedMenu.length - 1] == this.state.touslesMenusAvecnombre[j].idMenu) {


                    console.log(this.state.menusSelected);

                    this.state.menusSelected.push(this.state.touslesMenusAvecnombre[j]);
                    console.log(this.state.menusSelected);


                    this.state.menusSelected[this.state.checkedMenu.length - 1 ].nbr += 1;
                }
                i = +j;
            }
        }
    }
    //pour faire varier la quantité des menus

    handleChangeCount(index, count) {
        let menu1 = this.state.menusSelected;
        menu1[index].nbr += count;

        if (menu1[index].nbr < 0) {
            menu1[index].nbr = 0;

            //if faut afficher le bouton de remove 
        }
        this.setState({
            menusSelected: menu1

        })

    }

    // la fonction pour supprimer le menu ---je n'ai pas réussi

    /*handleRemoveMenu(index){

        //let a= this.state.menusSelected.filter((item, i)=> index!=i); 
       
        this.setState({
            menusSelected: a
        })

        let b = this.state.menusSelected;
        b.splice(index,1); 
        this.setState({
            menusSelected : b
        })     
    }*/

    //la fonction pour calculer le prix total
    getTotalPrice() {
       let somme =0;
        for (let j = 0; j < this.state.menusSelected.length; j++) {
            somme += this.state.menusSelected[j].nbr * this.state.menusSelected[j].price;
        }
       
        return somme;
    }

    //la fct pour afficher la page de paiement 
    
    handlePay(){
        this.setState({
            payDisplay: true, 
        })
    
        //envoyer userId
        const userId={
            id:localStorage.getItem("id")    
        }

        let url3="http://localhost:8080/Delevery/getUserId/"+localStorage.getItem("id");
        console.log(userId);
        fetch(url3,{
           /* headers:{
                "content-type":"application/json"
        },*/
        method:"get",
        //body:JSON.stringify(userId)
        }).then((response)=>response.json())
        .then((data)=>{
            this.setState({
                userAdresse: data.adresse
            })

        })
    }

   
    handleUserAdresseInput(event){
        const {value}=event.target;
        this.setState({
            userAdresse: value
        })  
             
    }

    //envoyer l'adresse
    addUserAdresse(){
        
        const u={
            id:localStorage.getItem("id"),
            adresse: this.state.userAdresse
        }
        console.log(u);

        let url5="http://localhost:8080/Delevery/addUserAdresse";
        fetch(url5,{
             headers:{
                 "content-type":"application/json"
         },
         method:"post",
         body:JSON.stringify(u)
         }).then((response)=>response.json())
         .then((data)=>{
             this.setState({
                 userAdresse: data.adresse
             })
 
         })

        let url6= "------------------"

        this.setState({
            payementOptionDisplay:true,
     
        })

    }

     //payer avec like ou pas
     handlePayWithLike(event){
  
        this.setState({
            payWithLike:event.target.value,
            isPayWithLikes:!this.state.isPayWithLikes
        })
    }

    //choisir la façon de payer
    handleChoosePayment(event){
        
        this.setState({
            payementMethod:event.target.value
        })
    
    }


   
    validateCommand(){
        console.log(this.state.payementMethod);
        console.log(this.state.payWithLike)
        const c={
            id: localStorage.getItem("id"),
        
        }

        //pas fini
        
        
    }

    render() {
        const { tousLesResto, click, restoChoisi, menusSelected, commandeDisplay, payDisplay, payementOptionDisplay, likePoint } = this.state;
        this.tofetch()
        return (
            <div>
                {!click && (
                    <>
                        <table>
                            <p>list de Resto </p>
                            <tr>
                                <th>nom </th>
                                <th>adresse</th>
                            </tr>

                            {tousLesResto.map((items) => (
                                <tr key={items.idRest} className="text-center">
                                    <td value={restoChoisi}
                                        onClick={() => this.affichageMenu(items)}> {items.nomResto}</td>
                                    <td> {items.adresseResto}</td>
                                </tr>

                            ))}

                        </table>
                    </>
                )
                }

                {click && (
                    <>
                        <div className="checkMenu">
                            choisissez votre menu: <br></br>
                            {restoChoisi.menutab.map((item) => (
                                <li key={item.idMenu} className="text-center">
                                    <input type="checkbox" value={item.idMenu} className="checkMenu"
                                        onChange={this.handleSelectMenu}></input>
                                    <label> {item.menu}  {item.price} €</label>
                                </li>
                            ))
                            }
                            <button onClick={this.handleRetourClick}>retour</button>

                        </div>

                    </>
                )}

                {click && commandeDisplay && (
                    <div className="commandeDisplay">
                        <br></br>
                        <h3> votre commande : </h3>
                        {menusSelected.map((item, index) => (
                           
                            <tr key={item.id}>
                                <th>{item.menu}</th>
                                <th>{item.price} € </th>
                                
                                <th>
                                    <button disabled={item[index] == 0}
                                        onClick={() => this.handleChangeCount(index, -1)}>-</button>
                                    <span>{item.nbr}</span>
                                    <button onClick={() => this.handleChangeCount(index, 1)}>+</button>
                                </th>
                                <th>
                                    <button onClick={()=>this.handleRemoveMenu(index)}>supprimer</button>
                                </th>
                            </tr>
                        ))
                        }
                        <div>
                            <p> Total :  {this.getTotalPrice()} €</p>
                            <br></br>
                            <button onClick={this.handlePay}>commander</button>
                        </div>
                    </div>

                )}

                {
                    click && commandeDisplay && payDisplay &&(
                        <>
                        <div className="payDisplay">
                            <label> l'adresse de livraison : </label>
                           <input type="text"  placeholder={this.state.userAdresse} onChange={this.handleUserAdresseInput}></input>
                           <button onClick={this.addUserAdresse}>valider </button>
                    
                        </div>
                        </>
                    )
                }
               
                { payementOptionDisplay && (
                    <>
                    <div className="payementOption">
                        
                        <span> Votre point de like : {this.state.likePoint}</span>
                        <p>vous voulez payer avec votre point like ? </p>
                        <select value={this.state.payWithLike} onChange={this.handlePayWithLike}>
                            <option id="oui" value="oui">oui</option>
                            <option id="non" value="non">non</option>
                        </select>
                         <br></br>
                         {
                             this.state.isPayWithLikes &&(
                                 <div>
                                 <p> il reste {this.getTotalPrice()-likePoint} € à payer, vous voulez régler par : </p>
                                 <select value ={this.state.payementMethod}onChange={this.handleChoosePayment}>
                                 <option value="cb">carte bleue</option>
                                 <option value="espece">espèce</option>
                                 <option value="cheque">chèque</option>
                             </select>
                             <button onClick={this.validateCommand}>valider</button>
                             </div>
                             )  
                         }
                         {
                             !this.state.isPayWithLikes &&(
                                <div>
                                <p> il reste {this.getTotalPrice()} € à payer, vous voulez régler par : </p>
                                <select value ={this.state.payementMethod}onChange={this.handleChoosePayment}>
                                <option value="cb">carte bleue</option>
                                <option value="espece">espèce</option>
                                <option value="cheque">chèque</option>
                            </select>
                            <button onClick={this.validateCommand}>valider</button>
                            </div>
                             )
                         }
                          
                        
                       
                    </div>
                    </>

                )}


            </div >
        );
    }
}

export default RestoPlat;

