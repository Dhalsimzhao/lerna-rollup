const path = require('path');
const execSync = require('child_process').execSync;

// function exec(cmd) {
//   execSync(cmd, { stdio: "inherit", env: process.env });
// }

// const cwd = process.cwd();

// // Note: We don't currently have a build step for react-router-native.
// // Instead, we use the source files directly.
// ["ui-elements", "ui-components", "sdk"].forEach(packageName => {
//   process.chdir(path.resolve(__dirname, "../packages/" + packageName));
//   exec("npm run start");
// });

// process.chdir(cwd);

const runAll = require('npm-run-all');

runAll(['watch', 'storybook'], {
  parallel: false,
  stdin: process.stdin,
  stdout: process.stdout
});
// ["ui-elements", "ui-components", "sdk"].forEach(packageName => {
//   process.chdir(path.resolve(__dirname, "../packages/" + packageName));
//   exec("npm run start");
// });
