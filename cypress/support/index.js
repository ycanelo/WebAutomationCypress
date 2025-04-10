import fs from 'fs';
beforeEach(() => {
    // Delete the download directory and recreate it
    fs.readdirSync('./screenshots').forEach((file) => {
        fs.rmdirSync(`./screenshots/${file}`);
      });
  });