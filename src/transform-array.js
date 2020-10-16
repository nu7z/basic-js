const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('Error');
    
    const size = arr.length - 1;
    const result = [];
    const prevOrNext = {
        prev: [`--double-prev`, `--discard-prev`],
        next: [`--double-next`, `--discard-next`],

    }

    arr.forEach((item, index) => {
        if (result.length === 0 && prevOrNext.prev.some((word) => word === item)) return;
        if (index === size && prevOrNext.next.some((word) => word === item)) return;
        result.push(item);
    })
    return result;
};
