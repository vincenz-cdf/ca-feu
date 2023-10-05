function error_length(argument) {
    if (argument.length != 4) {
        console.error('Veuillez passer deux arguments (largeur et hauteur)');
        process.exit(1);
    }
}


function error_type(width, height) {
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        console.error('Les arguments doivent être des entiers positifs');
        process.exit(1);
    }
}


function drawRectangle(width, height) {
    if (width === 1 && height === 1) {
        console.log('o');
        return;
    }

    let top = 'o';
    for (let i = 1; i < width - 1; i++) {
        top += '-';
    }
    top += 'o';
    console.log(top);

    for (let i = 0; i < height - 2; i++) {
        let middle = '|';
        for (let j = 1; j < width - 1; j++) {
            middle += ' ';
        }
        middle += '|';
        console.log(middle);
    }

    if (height > 1) {
        console.log(top);
    }
}


function main() {

    error_length(process.argv);
    const width = parseInt(process.argv[2]);
    const height = parseInt(process.argv[3]);
    error_type(width, height);

    drawRectangle(width, height);
}

main();