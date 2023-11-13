function binarySearch(items, item) {
    var low = 0,
        high = items.length - 1,
        mid, elem
    while(low <= high) {
        mid = Math.floor((low+high)/2)
        elem = items[mid]
        if(elem < item) {
            low = mid + 1
        } else if(elem > item) {
            high = mid - 1
        } else {
            return mid
        }
    }
    return -1
}

// 测试
var arr = [2,3,1,4]
// 快排
quickSort(arr)

binarySearch(arr, 3)
// 2

binarySearch(arr, 5)
// -1