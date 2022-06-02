import { Component } from 'react';

class SummonerCard extends Component {
    render() {
        return (
            <div className="flex my-2 sm:mx-2 p-3 items-center rounded-lg shadow-lg bg-white border border-gold-800">
                <img className="w-16 h-16 rounded-lg mr-4" src={this.props.summoner.iconURL} alt={this.props.summoner.name} />
                <div className="text-sm">
                    <p className="text-gray-900 font-bold">{this.props.summoner.name}</p>
                    <p className="text-gray-600">{this.props.summoner.region}</p>
                    <p className="text-gray-600 leading-none">Level: {this.props.summoner.level}</p>
                </div>
            </div>
        );
    }
}

export default SummonerCard;