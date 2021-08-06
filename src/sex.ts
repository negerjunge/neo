function randomString(length:9, chars:any) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}
var rString = randomString(9, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
console.log()