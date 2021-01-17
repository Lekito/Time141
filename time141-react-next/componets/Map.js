import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
    state = {
        viewport: {
            width: '100%',
            height: '500px',
            latitude:-22.9035,
            longitude: -43.2096,
            zoom: 13
        }
    };

    render() {
        return (
            <ReactMapGL
                mapStyle="mapbox://styles/mapbox/streets-v9"
                mapboxApiAccessToken="pk.eyJ1IjoibGVraXRpbmhvIiwiYSI6ImNramxuZm45aDBoN28yem8wZm90cWgxMWMifQ.RTmfJofFokfzncf7s85X-g"
                onViewportChange={(viewport) => this.setState({viewport})}
                {...this.state.viewport}
            />
        );
    }
}

export default Map;