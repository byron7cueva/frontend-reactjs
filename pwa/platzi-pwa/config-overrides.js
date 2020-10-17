const workboxBuild = require('workbox-build');
const path = require('path');
// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  workboxBuild
    .injectManifest({
      swSrc: path.join(__dirname, 'src', 'service-worker.js'), // this is your sw template file
      swDest: 'build/service-worker.js', // this will be created in the build step
      globDirectory: 'build'
    })
    .then(({ count, size, warnings }) => {
      // Optionally, log any warnings and details.
      warnings.forEach(console.warn);
      console.log(`${count} files will be precached, totaling ${size} bytes.`);
    })
    .catch(console.error);
};
buildSW();