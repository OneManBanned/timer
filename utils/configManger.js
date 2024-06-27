import fs from "fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

class ConfigManager {
  constructor(config) {
    this.fileName = config;
    this.dir = dirname(fileURLToPath(import.meta.url));
  }

  readDuration = () => {
    let fileData = fs.readFileSync(
      join(this.dir, this.fileName),
      "utf-8",
      (err) => {
        if (err) throw err;
      },
    );

    const cachedValue = fileData.replace(/\n\n/, "").split("=")[1];
    return +cachedValue;
  };

  writeDuration = (content) => {
    fs.writeFile(join(this.dir, this.fileName), content, (err) => {
      if (err) throw err;
    });
  };
}

export default ConfigManager;
