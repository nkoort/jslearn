let num = 50;

if (num < 49) {
    console.log('BAD')
} else if (num > 100) {
    console.log('>100')
} else {
    console.log('good')
};

switch (num) {
    case num < 49:
        console.log('BAD');
        break;
    case num > 100:
        console.log('>100');
        break;
    case num > 80:
        console.log('>800');
        break;
    case 50:
        console.log('GOOD');
        break;
    default:
        console.log('default');
        break;
}