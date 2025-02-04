(function (): void {
    //variables
    const number: number = 26;

    //function
    function minues1(a: number, b: number): number {
        return a - b
    }

    //Arrow function
    const minues2 = (a: number, b: number): number => {
        return a - b
    }

    //class
    class Circle {
        private radius: number;

        constructor(r: number) {
            this.radius = r
        }
    }
})()