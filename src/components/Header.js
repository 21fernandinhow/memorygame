import React from "react";

const Header = (props) => {
    return (
        <header className="container">
            <div id="header">
                <h1>Jogo da Memória</h1>
                <span id="result"></span>
                <div className="stats">
                    <div id="lives">
                        <h3>Vidas: {props.lifes}</h3>
                    </div>
                    <div id="cards">
                        <h3>Cartas faltantes: {props.cardsCount}</h3>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;