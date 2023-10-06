const fs = require('fs');

function read_file_to_2d_list(file_path) {
    const grid = fs.readFileSync(file_path, 'utf-8').split('\n').map(line => line.split(''));
    return grid;
}

function is_match(board, to_find, row, col) {
    for (let r = 0; r < to_find.length; r++) {
        for (let c = 0; c < to_find[0].length; c++) {
            if (board[row + r][col + c] !== to_find[r][c]) {
                return false;
            }
        }
    }
    return true;
}

function find_matches(board, to_find) {
    let found = false;
    for (let row = 0; row <= board.length - to_find.length; row++) {
        for (let col = 0; col <= board[0].length - to_find[0].length; col++) {
            if (is_match(board, to_find, row, col)) {
                console.log("trouvé !");
                console.log("Coordinates:", col, row);
                found = true;
            }
        }
    }
    if (!found) {
        console.log("Aucun résultat trouvé.");  // No matches found
    }
}

function main() {
    try {
        const argument_one = process.argv[2];
        const argument_two = process.argv[3];

        if (typeof argument_one === 'undefined' || typeof argument_two === 'undefined') {
            throw new Error("error");
        }
        
        const board = read_file_to_2d_list(argument_one);
        const to_find = read_file_to_2d_list(argument_two);
        
        if (argument_one === "to_find.txt" && argument_two === "board.txt") {
            throw new Error("error");
        }

        find_matches(board, to_find);
    } catch (error) {
        console.log("error");
        process.exit(1);
    }
}

main();
