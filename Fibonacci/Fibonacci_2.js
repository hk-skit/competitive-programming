/**
 * Returns nth fibonacci number uses dynamic programming.
 * Time Complexity: O(n).
 * Space Complexity: O(n).
 */
const fibonacci = ((() => {
    function fib(n) {
        if (n <= 1) {
            return n;
        }
        const f = [0, 1];
        for (let i = 2; i <= n; i++) {
            f[i] = f[i - 1] + f[i - 2];
        }
        return f[n];
    }
    return fib;
})());
