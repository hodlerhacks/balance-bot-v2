// ------------------------------------
// REQUIRES GIT TO BE LOCALLY INSTALLED
// ------------------------------------

const spawn = require('child_process').spawn;
const execSync = require('child_process').execSync;
const fse = require('fs-extra');
const prompt = require('prompt-sync')();

const installpath = './bb/';
const installerpath = './installer/';
const basepath = './';
const bbfile = 'bb.js';
const installfile = 'install.js';
const packageFileInstaller = 'package-installer.json';
const packageFile = 'package.json';

const installerVersion = require(basepath + packageFileInstaller).version;
const existsInstallation = fse.pathExistsSync(installpath);
const existsConfiguration = fse.pathExistsSync(installpath + 'config/');

let full = false;
let staging = false;
let repository;
let message = 'Enter selection: ';

let selection = process.argv[2] || null;

start();

function start() {
    if (!selection) {
        console.clear();
        console.log('');
        console.log('---------------------------------------------');
        console.log('');
        console.log('            Balance Bot Installer');
        console.log(`                   v${installerVersion}`);
        console.log('');
        console.log('---------------------------------------------');
        console.log('');
        console.log('  1 - Install Balance Bot');
        console.log('  2 - Update Balance Bot');
        console.log('  3 - Re-install Balance Bot');
        console.log('');
        console.log('  u - Update this installer');
        console.log('');
        console.log('  0 - Exit');
        console.log('');
        console.log('---------------------------------------------');
        console.log('');
        selection = prompt(message);
        console.log('');
    }

    switch (selection) {
        case '1':
            install();
            break;
        case '2':
            install();
            break;
        case '3':
            full = true;
            install();
            break;
        case '1s':
            staging = true;
            install();
            break;
        case '2s':
            staging = true;
            install();
            break;
        case '3s':
            full = true;
            staging = true;
            install();
            break;
        case 'u':
            full = true;
            update();
            break;
        case '0':
            break;
        default:
            message = 'Invalid selection, try again: ';
            start();
            break;
    }
}

function install() {
    repository = staging ? "https://github.com/hodlerhacks/balance-bot-v2-staging.git" : "https://github.com/hodlerhacks/balance-bot-v2.git";

    console.log('---------------------------------------------');
    console.log('Downloading Balance Bot...');

    if (full && existsConfiguration) {
        try {
            fse.copySync(installpath + 'config/', basepath + 'temp/', { overwrite: true });
        } catch (err) {
            console.log('Error occured while copying config folder (1): ', err);
            return process.exit(1);
        }
    }

    if (full) {
        try {
            fse.removeSync(installpath);
        } catch (err) {
            if (err) {
                console.log('Error occured while cleaning up install folder: ', err);
                return process.exit(1);
            }
        }
    }

    download(installpath, (err) => {
        if (err) {
            console.log('Error occured while downloading Balance Bot: ', err);
            return process.exit(1);
        } else {
            console.log('Balance Bot downloaded');
            console.log('---------------------------------------------');
            console.log('Installing Packages...');
            try {
                if (fse.pathExistsSync(installpath + packageFileInstaller)) fse.moveSync(installpath + packageFileInstaller, basepath + packageFileInstaller, { overwrite: true });
                const installerDependencies = require(basepath + packageFileInstaller).dependencies;
                const bbDependencies = require(installpath + packageFile).dependencies;
                const mergedDependencies = merge(installerDependencies, bbDependencies);

                const pckgFile = require(installpath + packageFile);
                pckgFile.dependencies = mergedDependencies;

                fse.writeJsonSync(basepath + packageFile, pckgFile);

                execSync('npm install', { stdio: 'ignore', cwd: basepath });
            } catch (err) {
                console.log('Error occured during package installation: ', err);
                return process.exit(1);
            }

            console.log('Packages installed');
            console.log('---------------------------------------------');
            console.log('Installing Balance Bot...');

            try {
                if (fse.pathExistsSync(installpath + bbfile)) fse.moveSync(installpath + bbfile, basepath + bbfile, { overwrite: true });
                if (fse.pathExistsSync(installpath + installfile)) fse.moveSync(installpath + installfile, basepath + installfile, { overwrite: true });
            } catch (err) {
                console.log('Error occured during Balance Bot installation: ', err);
                return process.exit(1);
            }
            if (full && existsConfiguration) {
                try {
                    fse.copySync(basepath + 'temp/', installpath + 'config/', { overwrite: true });
                } catch (err) {
                    console.log('Error occured while copying config folder (2): ', err);
                    return process.exit(1);
                }
                try {
                    fse.removeSync(basepath + 'temp/');
                } catch (err) {
                    if (err) {
                        console.log('Error occured while cleaning up temp folder: ', err);
                        return process.exit(1);
                    }
                }
            }
            const pckg = require(installpath + '/package.json');
            console.log(`Balance Bot version ${pckg.version} installed`);
            console.log('---------------------------------------------');
            if (pckg.description != '') {
                console.log(pckg.description);
                console.log('---------------------------------------------');
            }
            console.log('');
        }
    });
}

async function update() {
    repository = "https://github.com/hodlerhacks/balance.git";

    console.log('---------------------------------------------');
    console.log('Downloading Balance Bot Installer...');

    download(installerpath, (err) => {
        if (err) {
            console.log('Error occured while downloading Balance Bot Installer: ', err);
            return process.exit(1);
        } else {
            console.log('Balance Bot Installer downloaded');
            console.log('---------------------------------------------');
            console.log('Installing Balance Bot Installer...');
            try {
                if (existsInstallation) {
                    const installerDependencies = require(installerpath + packageFileInstaller).dependencies;
                    const bbDependencies = require(installpath + packageFile).dependencies;
                    const mergedDependencies = merge(installerDependencies, bbDependencies);

                    const pckgFile = require(installpath + packageFile);
                    pckgFile.dependencies = mergedDependencies;

                    fse.writeJsonSync(installerpath + packageFile, pckgFile);
                }

                fse.copySync(installerpath, basepath, { overwrite: true });
                fse.removeSync(installerpath);
            } catch (err) {
                console.log('Error occured during package installation: ', err);
                return process.exit(1);
            }

            console.log('Installer installed');
            console.log('---------------------------------------------');
            console.log('Installing packages...');

            execSync('npm install', { stdio: 'ignore', cwd: basepath });

            console.log(`Installation completed`);
            console.log('---------------------------------------------');
            console.log('');
        }
    });
}

function merge(dep1, dep2) {
    let merged = dep1;

    const deps = Object.entries(dep2);

    for (const dep of deps) {
        const key = dep[0];
        const value = dep[1];

        if (!dep1.hasOwnProperty(key)) {
            merged = {
                ...merged,
                [key]: value,
            }
        }
    }

    const sorted = Object.keys(merged).sort().reduce(
        (obj, key) => {
            obj[key] = merged[key];
            return obj;
        },
        {}
    );
    
    return sorted;
}

function download(path, cb) {
    if (!existsInstallation || full) gitClone(path, (err) => {
        if (err) {
            console.log('Error occured during git clone: ', err);
            return process.exit(1);
        }
        else cb(null);
    });
    else gitPull(path, (err) => {
        if (err) {
            console.log('Error occured during git pull: ', err);
            return process.exit(1);
        }
        else cb(null);
    });
}

function gitClone(path, cb) {
    const args = ['clone', repository, path];
    spawncb('git', args, {}, function (err) {
        if (err) cb(err);
        else cb(null);
    });
}

function gitPull(path, cb) {
    const args = ['pull'];
    spawncb('git', args, { cwd: path }, function (err) {
        if (err) cb(err);
        else cb(null);
    });
}

function spawncb(command, args, opts, cb) {
    opts.stdio = 'inherit';

    const child = spawn(command, args, opts);
    child.on('error', cb);
    child.on('close', function (code) {
        if (code !== 0) return cb(new Error('exit code ' + code));
        cb(null);
    })
    return child;
}