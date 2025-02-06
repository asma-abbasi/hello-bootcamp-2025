(function () {
    let obj: unknown = {x: 20}

    // @ts-expect-error
    obj.foo();
    obj="name"
})()