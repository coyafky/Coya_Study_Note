function binarySearch(arr, target, start, end) {
    var idx = Math.floor((start + end) / 2);
    if (idx == start && arr[idx] != target) {
        return -1;
    } else if (idx == start && arr[idx] == target) {
        return idx;
    }
    if (target < arr[idx]) {
        return binarySearch(arr, target, start, idx);
    } else if (target > arr[idx]) {
        return binarySearch(arr, target, idx, end);
    } else {
        return idx;
    }
}


