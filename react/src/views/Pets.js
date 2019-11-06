//Pets (plural) frontend page
//not to be confused with Pet (singluar)
import React from 'react';
import Pet from "./Pet/Pet.js";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

class Pets extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: []
        };

    }

    componentDidMount = () => {


        fetch(`/pets/`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    pets: data
                });
            })
            .catch(error => {
                console.log(error);
            });
    };


    //nicole note: sort of nervous because the number of put pages will increase with use creation
    //may need a map function to map through like in sheba's project
    //it doesn't know which id we're talking about yet, shows up too literally
    render() {
        //i need a function that grabs the text
        const names = this.state.pets.map(pet =>
            (
                <div>

                    <Link to={`/pets/${pet.petID}`}>{pet.name}</Link>

                </div>

            ));
        //figure out how to make link button
        return (

            <div>
                <h1>Pets Page</h1>

                <div>
                    <ul>
                        <li>
                            {names}
                        </li>

                    </ul>
                    <Link to="/create" className="secondary">Create New Pet</Link>

                </div>

            </div>
        )
    }
}
export default Pets;