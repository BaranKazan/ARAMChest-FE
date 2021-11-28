import { Component } from 'react';

class ChampionCard extends Component {
    render() {
        return (
            <div class="max-w-sm bg-white rounded-2xl shadow-md text-center">
                <img class="mx-auto" src="https://ddragon.leagueoflegends.com/cdn/11.23.1/img/champion/Jhin.png" alt="Woman's Face" />
                <p class="text-lg text-black font-semibold">Jhin</p>
            </div>
        );
    }
}

export default ChampionCard;