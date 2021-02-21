// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix
        ? matrix
              .map((row, index) => {
                  return index % 2 === 1 ? row.reverse() : row;
              })
              .reduce((result, row) => result.concat(row), [])
        : [];
}
