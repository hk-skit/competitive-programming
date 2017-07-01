/**
 * Returns nth fibonacci number uses dynamic programming.
 * Time Complexity: O(n).
 * Space Complexity: O(1).
 */
const fibonacci = ((() => {
    function fib(n) {
        if (n <= 1) {
            return n;
        }
        let a = 0;
        let b = 1;
        for (let i = 2; i <= n; i += 1) {
            b = a + b;
            a = b - a;
        }
        return b;
    }
    return fib;
})());
