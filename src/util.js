export const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
 };

export const getGcd = (num1, num2) => {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    let gcd = 0;
    while(gcd === 0) {
        let remains = max % min;
        if (remains === 0) {
            gcd = min;
        } else {
            max = min;
            min = remains;
        }
    }
    return gcd;
}

export const isEven = (num) => num % 2 === 0;
