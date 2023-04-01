function findNextSquare(sq) {
    const num = Math.sqrt(sq);
    return Number.isInteger(num)?Math.pow(num+1, 2):-1;
}