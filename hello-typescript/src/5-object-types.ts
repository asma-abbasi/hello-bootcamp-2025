(function (): void {

    type Person = {
        firstName: string,
        lastName: string
    }

    interface IPerson {
        firstName: string,
        lastName: string
    }

    const person: IPerson = {
        firstName: "asma",
        lastName: "abbasi"
    }
// @ts-expect-error
    person.age = 26;
})()