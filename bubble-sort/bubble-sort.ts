// array = [5, 4, 3, 2, 1]
export default function bubble_sort(array: number[]) : void {
    for(var i = array.length - 1; i > 0; i--) {
        for(var j = 0; j < i; j++) {
            if(array[j] > array[j+1]) {
                let item = array[j]
                array[j] = array[j+1]
                array[j+1] = item
            }
        }
    }
}

bubble_sort([5,4,3,2,1])
bubble_sort([5,4,3,2,10])