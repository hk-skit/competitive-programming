/**
 * Returns the nth fibonacci number. It uses the fact below.
 * 
 * [ 1 1 ] n      [ F(n+1) F(n)   ]
 * [ 1 0 ]    =   [ F(n)   F(n-1) ]
 * 
 * Time Complexity = O(n);
 */
const fibonacci = ((() => {

    /**
     * Function mutiplies a 2x2 matrix to another 2x2 matrix.
     * It's not a generic function and should not be used at
     * other places.
     * @param {Array} a 2*2 matrix
     * @param {Array} b 2*2 matrix.
     */
    function mutiply(a, b) {
        const x = a[0][0] * b[0][0] + a[0][1] * b[1][0];
        const y = a[0][0] * b[0][1] + a[0][1] * b[1][1];
        const w = a[1][0] * b[0][0] + a[1][1] * b[1][0];
        const z = a[1][0] * b[0][1] + a[1][1] * b[1][1];
        return [[x, y], [w, x]];
    }

    /**
     * Multiplies the matrix n times.
     * @param {[[Type]]} matrix [[Description]]
     * @param {[[Type]]} n      [[Description]]
     */
    function power(matrix, n) {
        let result = matrix;
        for (let i = 2; i <= n; i += 1) {
            result = mutiply(result, matrix);
        }
        return result;
    }

    function fib(n) {
        if (n === 0) {
            return n;
        }
        let matrix = [[1, 1], [1, 0]];
        matrix = power(matrix, n - 1);
        return matrix[0][0];
    }
    return fib;
})());
