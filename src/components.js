const fs = require('fs');
const path = require('path');

function getComponents() {

    const componentsPath = path.join(__dirname, '../components');

    if (!fs.existsSync(componentsPath)) return {};

    const componentsList = fs.readdirSync(componentsPath);
    let components = {};

    componentsList.forEach((file) => {

        const filePath = path.join(componentsPath, file);

        components[path.basename(filePath, path.extname(filePath))] = require(filePath);

    });

    return components;

}

module.exports = {
    getComponents
};