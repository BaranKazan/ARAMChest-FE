import { Component } from 'react';

class SummonerCard extends Component {
    render() {
        return (
            <div class="flex mt-3 items-center bg-white">
                <img class="w-10 h-10 rounded-full mr-4" src={this.props.summoner.iconURL} alt="hello" />
                <div class="text-sm">
                    <p class="text-gray-900 leading-none">{this.props.summoner.name}</p>
                    <p class="text-gray-600">{this.props.summoner.region}</p>
                    <p class="text-gray-600">{this.props.summoner.level}</p>
                </div>
            </div>
        );
    }
}

export default SummonerCard;