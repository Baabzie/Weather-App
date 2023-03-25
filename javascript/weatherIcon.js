export function weatherIcon(weathercode) {
    if (weathercode === 0) {
        return "sun";
    }
    else if (weathercode < 3) {
        return "cloudSun"
    }
    else if (weathercode < 49) {
        return "cloud"
    }
    else if (weathercode < 68) {
        return "cloudRain"
    }
    else if (weathercode < 78) {
        return "snowflake"
    }
    else if (weathercode < 83) {
        return "cloudShowersHeavy"
    }
    else if (weathercode < 87) {
        return "snowflake"
    }
    else if (weathercode < 100) {
        return "cloudBolt"
    }
}