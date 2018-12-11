function ArrayList() {

}

// 剔除数组中的重复项
ArrayList.prototype.dedupe = function (array) {
    return Array.from(new Set(array));
};