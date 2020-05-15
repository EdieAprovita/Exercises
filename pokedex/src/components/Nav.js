import React from "react";
import { Link } from "react-router-dom";
import PokemonDetail from "./PokemonDetail";

const Nav = () =>  {
    return (
        <div>
            <h2>Logo</h2>
            <ul>
                <li><a href="">Lista</a></li>
                <li><a href="">Pokemon</a></li>

            </ul>
        </div>
    )
}

export default Nav;