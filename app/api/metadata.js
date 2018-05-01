module.exports = function (file) {
    return Promise.resolve({ size: file.size });
};
