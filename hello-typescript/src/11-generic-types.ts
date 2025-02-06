(function () {
    class Queue<T> {
        private items: T[] = []

        public enqueue(item: T) {
            this.items.push(item)
        }

        public dequeue(): T | undefined {
            if (this.items.length === 0) {
                return undefined;
            }
            const RemovedItems = this.items.splice(0, 1)
            return RemovedItems[0]
        }
    }

    const q1 = new Queue<number>()
    q1.enqueue(1);
    q1.enqueue(2);
    q1.enqueue(3);
    const RemovedItem1 = q1.dequeue()

    const q2 = new Queue<string>()
    q2.enqueue("asma");
    q2.enqueue("neda");
    q2.enqueue("samira");
    const RemovedItem2 = q2.dequeue()
})()