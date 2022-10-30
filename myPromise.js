function myPromise(executor) {
    let onResolve
    let value
    let called = false
    let fullfilled = false

    this.then = function (fn) {
        onResolve = fn

        if (fullfilled)
            onResolve(value)

        called = true
        return this
    }

    function resolve(val) {
        fullfilled = true
        value = val

        if (called)
            onResolve(val)
    }
    executor(resolve)
}