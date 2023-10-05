

if (process.argv.length != 3) {
    console.error('Veuillez passer une expression arithmétique comme argument');
    process.exit(1);
}

const expression = process.argv[2];

try {
    const result = eval(expression);
    console.log(result);
} catch (e) {
    console.error('Erreur lors de l\'évaluation de l\'expression:', e.message);
    process.exit(1);
}