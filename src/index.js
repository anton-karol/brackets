module.exports = function check(str, bracketsConfig) {
    let prev = '';
    while (prev.length !== str.length) {
        prev = str;
        for (let brackets of bracketsConfig) {
            str = str.replace(brackets[0] + brackets[1], '');
        }
    }
    return (str.length === 0);
}