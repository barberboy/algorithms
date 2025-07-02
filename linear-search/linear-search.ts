export default function linear_search(arr: number[], item: number):boolean {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            return true
        }
    }
    return false
}