const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '..', 'node_modules', 'next', 'dist', 'server', 'require-hook.js');

if (fs.existsSync(targetFile)) {
  let content = fs.readFileSync(targetFile, 'utf8');
  if (!content.includes('__patched_readlink')) {
    const patchCode = `"use strict";
const _fs = require('fs');
if (!_fs.__patched_readlink) {
  _fs.__patched_readlink = true;
  const _origReadlink = _fs.readlink;
  const _origPromisesReadlink = _fs.promises.readlink;
  const _origReadlinkSync = _fs.readlinkSync;

  _fs.readlink = function(p, ...args) {
    const cb = args[args.length - 1];
    if (typeof cb === 'function') {
      args[args.length - 1] = function(err, link) {
        if (err && (err.code === 'EINVAL' || err.code === 'UNKNOWN')) {
          return cb(null, null);
        }
        return cb(err, link);
      };
    }
    return _origReadlink.call(_fs, p, ...args);
  };

  _fs.promises.readlink = async function(p, ...args) {
    try {
      return await _origPromisesReadlink.call(_fs.promises, p, ...args);
    } catch (err) {
      if (err && (err.code === 'EINVAL' || err.code === 'UNKNOWN')) {
        return null;
      }
      throw err;
    }
  };

  _fs.readlinkSync = function(p, ...args) {
    try {
      return _origReadlinkSync.call(_fs, p, ...args);
    } catch (err) {
      if (err && (err.code === 'EINVAL' || err.code === 'UNKNOWN')) {
        return null;
      }
      throw err;
    }
  };
}
`;
    content = content.replace('"use strict";', patchCode);
    fs.writeFileSync(targetFile, content, 'utf8');
    console.log('Successfully patched Next.js for Windows NTFS readlink.');
  } else {
    console.log('Next.js already patched.');
  }
}
