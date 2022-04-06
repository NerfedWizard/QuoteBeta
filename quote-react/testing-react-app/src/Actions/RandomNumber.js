export default function RandomNumber() {
    const min = 1;
    const max = 37489;
    const rand = Math.floor(Math.random() * (max - min)) + min;
    return (rand);
}

export function RandomNum(authorLength) {
    const min = 0;
    const max = authorLength;
    const rand = Math.floor(Math.random() * (max - min)) + min;
    return (rand);
}
