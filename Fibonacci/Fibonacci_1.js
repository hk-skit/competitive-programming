/**
 * Returns the nth fibonacci number. Uses rescurion.
 * Time complexity: T(n) = T(n-1) + T(n-2);
 */
const fibonacci = ((() => {
    function fib(n) {
        if (n <= 1) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    }
    return fib;
})());
