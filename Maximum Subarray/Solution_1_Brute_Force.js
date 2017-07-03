const getMaximumSubarray = ((() => {
    function getSubarrays(array) {
        const subarrays = [];
        for (let i = 0; i < array.length; i += 1) {
            const subarray = [];
            for (let j = i; j < array.length; j += 1) {
                subarray.push(array[j]);
                subarrays.push([...subarray]);
            }
        }
        return subarrays;
    }

    function sum(array) {
        return array.reduce((total, n) => {
            return total + n;
        });
    }

    function maximumSubarray(array) {
        const subarrays = getSubarrays(array);
        let maxSum = 0;
        let result;
        subarrays.forEach((subarray) => {
            const total = sum(subarray);
            if (total > maxSum) {
                result = subarray;
                maxSum = total;
            }
        });
        return result;
    }
    return maximumSubarray;
})());
