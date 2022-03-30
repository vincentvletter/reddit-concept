function dotNotation(number) {
    const num = number.toString()
    let string = num.split('');

    string.reverse();
    let test = string;
    for (let i = 0; i < test.length; i++) {
        if (i === 3) {
            test.splice(3, 0, '.');
        }
        if (i === 7) {
            test.splice(7, 0, '.');
        }
        test.concat(test[i])
    }
    return test.reverse();
};

export default dotNotation;