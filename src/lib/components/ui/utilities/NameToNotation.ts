export const nameToNotation = (name: string) => {
    switch (name) {
        case 'humidity':
        case 'soil_moisture':
            return '%';
        case 'Temperature':
        case 'temperature':
        case 'temperatureC':
        case 'dew_point':
        case 'dew_pointC':
        case 'dewPointC':
            return '°C';
        case 'soil_EC':
            return 'dS/m';
        case 'soil_N':
            return 'mg/kg';
        case 'soil_P':
            return 'mg/kg';
        case 'soil_K':
            return 'mg/kg';
        case 'soil_PH':
            return 'pH';
        case 'co2_level':
            return 'ppm';
        case 'vpd':
            return 'hPk';
        case 'rainfall':
            return 'mm/hr';
        case 'pressure':
            return 'hPa';
        case 'wind_speed':
            return 'm/s';
        case 'lux':
            return 'lux';
        case 'uv':
            return 'UVI';
        case 'soil_temperature':
        case 'soil_temperatureC':
            return '°C';
        case 'soil_humidity':
            return '%';
        case 'soil_ec':
            return 'µS/cm';
        case 'soil_ph':
            return 'pH';
        case 'soil_nitrogen':
        case 'soil_n':
            return 'mg/kg';
        case 'soil_phosphorus':
        case 'soil_p':
            return 'mg/kg';
        case 'soil_potassium':
        case 'soil_k':
            return 'mg/kg';
        case 'wind_direction':
            return '°';
        case 'water_level':
            return 'm';
        case 'battery_level':
        case 'battery':
        case 'Battery':
            return '%';
        case 'sos':
            return 'SOS';
        case 'people_count':
            return 'People';
        case 'car_count':
            return 'Cars';
        case 'bicycle_count':
            return 'Bicycles';
        default:
            return '';
    }
}