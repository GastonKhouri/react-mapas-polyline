import { PlacesProvider, MapProvider } from './context';
import HomeScreen from './screens/HomeScreen';

import './styles.css';

const MapsApp = () => {
    return (
        <PlacesProvider>
            <MapProvider>
                <HomeScreen />
            </MapProvider>
        </PlacesProvider>
    );
};

export default MapsApp;