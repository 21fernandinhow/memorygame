import React from 'react';
import Card from "./Card";

const Game = (props) => {

    return (
        <div className="game">
            <div className="card-grid">
                <Card card_id="0"/>
                <Card card_id="1"/>
                <Card card_id="2"/>
                <Card card_id="3"/>
                <Card card_id="4"/>
                <Card card_id="5"/>
                <Card card_id="6"/>
                <Card card_id="7"/>
                <Card card_id="8"/>
                <Card card_id="9"/>
                <Card card_id="10"/>
                <Card card_id="11"/>
            </div>
            <button id="start" onClick={props.start}> Iniciar jogo</button>
        </div>
    )
}

export default Game;