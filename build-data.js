const fg = require('fast-glob');
const path = require('path');
const unslugify = require("@yourstruggle11/unslugify");
const fs = require('fs');
const chokidar = require("chokidar");
const probe = require('probe-image-size');

const getMedia = function (folder = "locations") {
  const base = 'public/' + folder;
  const data = fg.sync([`${base}/**/*.{jpg,jpeg,png,JPG}`], { onlyFiles: true, deep: 6 }).map((image) => {
    return processImage(image);
  })
  fs.writeFileSync('data.json', JSON.stringify(data));
}

const processImage = function (file) {   
  const fileInfo = path.parse(file);   
  const dimensions = probe.sync(fs.readFileSync(file))
  return {         
    path: fileInfo.dir.replace('public', ''),      
    width: dimensions?.width || 1200,
    height: dimensions?.height || 800,
    alt: unslugify(fileInfo.name),
    src: file.replace('public', '')   
  }
}

chokidar.watch(['public/locations', 'content']).on('change', (event, path) => {
  getMedia();
  const touch = path => {
    const time = new Date();
    try {
      utimesSync(path, time, time);
    } catch (err) {
      closeSync(openSync(path, "w"));
    }
  };      
  const filename = "src/pages/_document.js";
  var hack = createWriteStream(filename, { flags: 'a' });
  hack.write(' ');     
  touch(filename);
});

getMedia();