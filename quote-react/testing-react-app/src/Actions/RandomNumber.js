const getRandomNum=()=>{
    const min = 1;
    const max = 37205;
    const rand = Math.floor(Math.random() * (max - min)) + min;
    return (rand);
}

const getRandomNumSet=(length)=> {
    const min = 0;
    const max = length;
    const rand = Math.floor(Math.random() * (max - min)) + min;
    return (rand);
}
const RandomNumber = {
    getRandomNum,
    getRandomNumSet,
}
export default RandomNumber;