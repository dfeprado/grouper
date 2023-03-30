const { readFileSync, writeFileSync } = require('fs');
const { argv } = require('process');

if (!argv.length >= 3) {
    console.log('No command provided');
    return 1;
}

const command = argv[2];

if (!['inc-major', 'inc-minor', 'inc-release'].includes(command)) {
    console.log('Unknown command');
    return 1;
}

const versionFilePath = './src/app/version.ts';
const versionFileContent = readFileSync(versionFilePath).toString();

const getVersion = eval(
    versionFileContent
        .replace('export const version =', '() => (') + ')'
);

const version = getVersion();

if (command === 'inc-major') {
    version['major'] = version['major'] + 1;
    version['minor'] = 0;
    version['release'] = 0;
} else if (command === 'inc-minor') {
    version['minor'] = version['minor'] + 1;
    version['release'] = 0;
} else {
    version['release'] = version['release'] + 1;
}

version['timestamp'] = Date.now();

const newVersionFileContent = versionFileContent
    .replace(/major: \d+/, `major: ${version['major']}`)
    .replace(/minor: \d+/, `minor: ${version['minor']}`)
    .replace(/release: \d+/, `release: ${version['release']}`)
    .replace(/timestamp: \d+/, `timestamp: ${version['timestamp']}`);

writeFileSync(versionFilePath, newVersionFileContent);