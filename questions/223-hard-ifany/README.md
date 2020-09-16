Sometimes it's useful to detect if you have a value with `any` type. This is especially helpful while working with third-party Typescript modules, which can export `any` values in the module API. It's also good to know about `any` when you're suppressing implicitAny checks.

So, let's write a utility type `IfAny<T, Y, N>`, which takes input type `T`, true type `Y`, and false type `N`. If `T` is `any`, return `Y`, otherwise, return `N`.
