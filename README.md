Illustrates a bug in jest where you have multiple project configs with different babel transforms.

I am using the projects config to run two different test configurations using different babel transforms. One for react-native, and another for react-native-web.

If I run it using `yarn test` it works fine. However, when run in a single process using `yarn test --runInBand` we get errors. It seems like it's using the same babel transform for both projects. Perhaps there is some sort of cacheing problem.

It reproduces when running many tests if two tests use the same process.
