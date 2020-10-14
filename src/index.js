
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedMatrix = []
  if(matrix !== undefined){
    matrix.forEach((item, index) => {
      sortedMatrix.push(item.sort((a,b) => index % 2 === 0 ? a - b : b - a))
    })
  }
  return sortedMatrix.flat()
}
