import axios from 'axios';
import React from 'react';
import Moment from 'moment';

class Planet extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
        this.getPlanet = this.getPlanet.bind(this);
    }
    componentDidMount() {
        this.getPlanet();
    }

    async getPlanet() {
        let data = await axios
            .get("https://swapi.dev/api/planets")
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                console.log(error);
            });
        this.setState({ planets: data.data.results });
    }

    render() {
        const { planets } = this.state;
        Moment.locale('en');
        return (
            <div>
                <h3>THIS IS LIST PLANETS</h3>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Diameter</th>
                            <th>Population</th>
                            <th>Gravity</th>
                            <th>Created</th>
                        </tr>
                    </thead>
                    {planets && planets.map(planet => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{planet.name}</td>
                                    <td>{planet.diameter}</td>
                                    <td>{planet.population}</td>
                                    <td>{planet.gravity}</td>
                                    <td>{Moment(planet.created.toString()).format('d MMM yyyy')}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>
        )
    }
}

export default Planet;
