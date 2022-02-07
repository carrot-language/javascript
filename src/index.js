const components = require('./components').getComponents();

function parseObject(object) {

    return components[object.type](object, parseObject);

}

function parseFile(data) {

    let output = "";

    data.body.forEach((element) => {

        output += parseObject(element);

    });

    return output;

}

function getEmoji() {

    return '🧉';

}

function getName() {

    return 'JavaScript';

}

function getStatus() {

    // Needs Work
    // In-Development
    // Working
    // Done
    // Deprecated

    return 1;

}

module.exports = {
    getName,
    getStatus,
    getEmoji,
    parseFile
};