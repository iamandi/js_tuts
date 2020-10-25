const log = console.log;

log(module);

log("__dirname =>", __dirname);
log("__filename =>", __filename);

const os = require("os");

for (const [key, value] of new Map(Object.entries(os.networkInterfaces()))) {
  log(`>> key: ${key} - value: `, value);
}

for (const key in os.networkInterfaces()) {
  log(`>> key: ${key} - value: `, os.networkInterfaces()[key]);
}

const fs = require("fs").promises;

const files = async () => {
  try {
    const data = await fs.readdir("./");
    log(data);
  } catch (err) {
    throw new Error(err.message);
  }
};

files();
