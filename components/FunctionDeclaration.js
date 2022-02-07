module.exports = (object, parse) => {

    return `function ${parse(object.id)}() {}`;

};