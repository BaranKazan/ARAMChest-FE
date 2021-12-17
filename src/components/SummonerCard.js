import { Component } from 'react';

class SummonerCard extends Component {
    render() {
        return (
            <div className="flex w-full my-2 sm:mx-2 p-3 items-center rounded-lg shadow-lg bg-white">
                <img className="w-10 h-10 rounded-full mr-4" src={this.props.summoner.iconURL} alt="hello" />
                <div className="text-sm">
                    <p className="text-gray-900 leading-none">{this.props.summoner.name}</p>
                    <p className="text-gray-600">{this.props.summoner.region}</p>
                    <p className="text-gray-600">{this.props.summoner.level}</p>
                </div>
            </div>
        );
    }
}

export default SummonerCard;