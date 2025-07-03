export default class Queue<T> {
    head?: Node<T>
    tail?: Node<T>
    public length: number = 0

    enqueue (item: T) : void {
        const node = new Node<T>(item)
        if (!this.tail) {
            this.tail = this.head = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined
        } else {
            this.length--
            const head = this.head
            this.head = head.next
            // cleanup
            head.next = undefined
            if(this.length === 0) {
                this.tail = undefined
            }
            return head.value
        }
    }

    peek() : T | undefined {
        return this.head?.value
    }

    * [Symbol.iterator]() {
        let current = this.head;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }
}

class Node<T> {
    value: T
    next?: Node<T>

    constructor(value: T) {
        this.value = value
    }
}

const queue = new Queue<number>()
queue.enqueue(1)
console.log(queue)
queue.enqueue(2)
console.log(queue)
queue.enqueue(3)
console.log(queue)
queue.enqueue(4)
console.log(queue)

console.log(Array.from(queue))

console.log(queue.dequeue())

console.log(queue)
console.log(queue.peek())

console.log(Array.from(queue))
console.log(Array.from(queue))