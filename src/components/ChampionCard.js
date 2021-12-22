import { Component } from 'react';

class ChampionCard extends Component {
    render() {
        return (
            <div className="max-w-sm bg-white rounded-2xl shadow-md text-center px-3 pt-3 pb-1 overflow-hidden">
                <img className="mx-auto rounded" src={this.props.champion.imageURL} alt="Woman's Face" />
                <p className="text-gray-900 font-bold">{this.props.champion.name}</p>
            </div>
        );
    }
}

export default ChampionCard;