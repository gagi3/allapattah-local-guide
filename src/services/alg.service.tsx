import axios from 'axios';
import { allapattahPlaces } from '../AllapattahPlaces';

// const serviceURL = process.env.ALLAPATTAH_LOCAL_GUIDE_SERVER_URL;
const serviceURL = 'https://container-service-1.5rp0ncja7r49c.eu-west-1.cs.amazonlightsail.com';

const ALGService = {
    fetchPlaces: async () => {
        return await axios.get(`${serviceURL}/categories/places`);
    },

    getCurrentTemperature: () => {
        axios.get(`${serviceURL}/weather/current`)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                return {
                    temp: 85,
                    main: "Clouds",
                    icon: "04d"
                };
            });
    }
}

export default ALGService;