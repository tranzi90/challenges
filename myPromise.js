function myPromise(executor) {
    let onResolve
    let onReject
    let value
    let called = false
    let fulfilled = false

    this.then = function (fn) {
        onResolve = fn

        if (fulfilled)
            onResolve(value)

        called = true
        return this
    }

    this.catch = function (fn) {
        onReject = fn

        if (!fulfilled)
            onReject(value)

        // called = true
        return this
    }

    function resolve(val) {
        fulfilled = true
        value = val

        if (called)
            onResolve(val)
    }

    function reject(val) {
        value = val
        onReject(val)
    }

    executor(resolve, reject)
}