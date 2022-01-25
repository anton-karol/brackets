module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
    for (let brackets in bracketsConfig) {
        if (arr.filter(x => x === brackets[0]).length !== arr.filter(x => x === brackets[1]).length) {
            return false;
        }
    }
    return true;
}
