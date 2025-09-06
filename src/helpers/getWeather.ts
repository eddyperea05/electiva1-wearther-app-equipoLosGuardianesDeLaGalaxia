export const getWeather = async (lat:number, lon:number) => {
    const URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}`;
    const response = await fetch(URL);
    
    const obj = await response.json();

    return obj;
}   