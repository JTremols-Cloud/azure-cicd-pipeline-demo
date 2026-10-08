const fs = require('fs');

const info = {
  build: process.env.GITHUB_RUN_NUMBER || process.env.BITBUCKET_BUILD_NUMBER || 'local',
  commit: (process.env.GITHUB_SHA || process.env.BITBUCKET_COMMIT || 'local').slice(0, 7),
};

fs.writeFileSync('version.json', JSON.stringify(info));
console.log('Wrote version.json:', info);
