const fs = require("fs");

const targetDir = "./img";
const fileNameList = fs.readdirSync(targetDir);
const imgFileNameListObj = {
    imgFileNames: fileNameList
}

fs.writeFileSync('./json/imgFileNames.json', JSON.stringify(imgFileNameListObj))