let matrix = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

function createMatrix(matrix) {
    for (let k = 0; k < matrix.length; k++) {
        for (let j = 0; j < matrix[k].length; j++) {
            if (k === j) {
                matrix[k][j] = (j + 1) + (2*(k + 1))
            } else {
                matrix [k][j] = (k + 1) + (2*(j + 1))
            }
        }
    }

    return matrix
}

console.log(createMatrix(matrix))