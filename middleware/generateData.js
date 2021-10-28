export default function generateData(){
    const latitude =( (Math.random() * 180)-90).toFixed(7);
    const longitude = ((Math.random() * 260) - 180).toFixed(7);
    const name = Math.ceil(Math.random() * 1000).toString();
    const radius = Math.ceil(Math.random() * 10000)
    return {latitude, longitude, name, radius}
}
