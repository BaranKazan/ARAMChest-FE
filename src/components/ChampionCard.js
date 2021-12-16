import { Component } from 'react';

class ChampionCard extends Component {
    render() {
        return (
            <div className="max-w-sm bg-white rounded-2xl shadow-md text-center p-3 overflow-hidden">
                <img className="mx-auto" src={this.props.champion.imageURL} alt="Woman's Face" />
                <p className="font-sans text-lg text-black font-semibold">{this.props.champion.name}</p>
            </div>
        );
    }
}

export default ChampionCard;