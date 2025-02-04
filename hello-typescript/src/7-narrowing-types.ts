(function (): void {
    function chiz(value: string | number) {
        if (typeof value === "string") {
            console.log(`hello ${value}`)
            return;
        }
        if (typeof value === "number") {
            return value + 1;
        }
    }
})()