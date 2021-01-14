"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareWithKnownShapes = exports.SHAPES = exports.Shape = exports.CLASSIC = exports.BAR_CHORD = exports.ShapeDifficulty = void 0;
var ShapeDifficulty;
(function (ShapeDifficulty) {
    ShapeDifficulty[ShapeDifficulty["EASY"] = 1] = "EASY";
    ShapeDifficulty[ShapeDifficulty["MEDIUM"] = 5] = "MEDIUM";
    ShapeDifficulty[ShapeDifficulty["HARD"] = 10] = "HARD";
})(ShapeDifficulty = exports.ShapeDifficulty || (exports.ShapeDifficulty = {}));
exports.BAR_CHORD = 1;
exports.CLASSIC = 2;
var Shape = /** @class */ (function () {
    function Shape(shape, difficulty, extra) {
        if (difficulty === void 0) { difficulty = ShapeDifficulty.HARD; }
        if (extra === void 0) { extra = 0; }
        this.difficulty = difficulty;
        this.extra = extra;
        var lmin = Math.min.apply(Math, shape.filter(function (n) { return n !== -1; }));
        this.locations = shape.map(function (n) { return (n === -1 ? -1 : n - lmin); });
    }
    Shape.prototype.compare = function (other) {
        var _this = this;
        var diff = 0;
        other.locations.forEach(function (_, string) {
            var d2 = Math.abs(_this.locations[string] - other.locations[string]);
            diff += d2 * d2;
        });
        return {
            difficulty: this.difficulty + diff,
            match: diff === 0,
        };
    };
    return Shape;
}());
exports.Shape = Shape;
exports.SHAPES = [
    new Shape([0, 0, 0, 0, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 0, 2, 2, 2, 0], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([0, 4, -1, 2, 5, 0], ShapeDifficulty.HARD),
    new Shape([0, 2, 2, 1, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, 0, 2, 2, 2, 0], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, 0, 3, -1, -1, 1], ShapeDifficulty.EASY),
    new Shape([-1, 0, 3, 2, 2, 1], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 0, -1, 2, 2, 1], ShapeDifficulty.HARD),
    new Shape([-1, 0, 2, 1, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 0, 2, 4, 2, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 0, 7, 6, 0, 0], ShapeDifficulty.EASY),
    new Shape([-1, 0, 0, 2, 2, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 2, 2, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 6, 5, 5], ShapeDifficulty.EASY),
    new Shape([-1, -1, 0, 9, 10, 9], ShapeDifficulty.EASY),
    new Shape([3, -1, 2, 2, 2, 0], ShapeDifficulty.HARD),
    new Shape([-1, 0, 2, 0, 2, 0], ShapeDifficulty.EASY),
    new Shape([-1, 0, 2, 2, 2, 3], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 0, 2, 2, 2, 2], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([0, -1, 4, 2, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([2, -1, 2, 2, 2, 0], ShapeDifficulty.HARD),
    new Shape([-1, 0, 4, 2, 2, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 0, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 2, 2, -1, -1, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 2, 2, -1, 0], ShapeDifficulty.MEDIUM),
    new Shape([5, 7, 7, -1, -1, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 0, 2, 0, 2, 2], ShapeDifficulty.HARD),
    new Shape([5, 5, 4, 0, 3, 0], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, 0, 2, 0, 3, 2], ShapeDifficulty.MEDIUM),
    new Shape([1, 0, 3, 0, 2, 1], ShapeDifficulty.HARD),
    new Shape([-1, 0, 0, 0, 2, 0], ShapeDifficulty.EASY),
    new Shape([-1, 0, 2, 0, 3, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 2, 0, 3, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 2, 2, 3, 3], ShapeDifficulty.MEDIUM),
    new Shape([5, -1, 0, 0, 3, 0], ShapeDifficulty.HARD),
    new Shape([-1, 0, 0, 0, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, -1, 0, 2, 2, 1], ShapeDifficulty.MEDIUM),
    new Shape([-1, 3, 2, 1, 1, 0], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, -1, 0, 1, 0, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 2, 0, 1, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 0, 0, 1], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 1, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 2, 0, 1, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([0, 2, 2, 1, 3, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, 2, 0, 1, 3, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 4, 4, 4], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, 2, 0, 1, 0, 1], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 1, 0, 1], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([-1, -1, 2, 0, 0, 0], ShapeDifficulty.EASY),
    new Shape([0, 2, 1, 1, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([0, -1, 6, 4, 4, 0], ShapeDifficulty.HARD),
    new Shape([-1, -1, 1, 1, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 2, 2, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 3, -1, 2, 4, 0], ShapeDifficulty.HARD),
    new Shape([-1, -1, 0, 2, 1, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 1, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 2, 2, 1, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 0, 7, 5, 5, 5], ShapeDifficulty.MEDIUM),
    new Shape([-1, 3, 2, 2, 1, 0], ShapeDifficulty.EASY),
    new Shape([8, 12, -1, -1, -1, 0], ShapeDifficulty.HARD),
    new Shape([0, 0, 7, 5, 0, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 3, 2, 2, 0, 0], ShapeDifficulty.EASY),
    new Shape([-1, -1, 0, 2, 1, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 5, 5, 5], ShapeDifficulty.EASY),
    new Shape([0, 0, 3, 2, 1, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([1, 3, 3, 2, 1, 0], ShapeDifficulty.HARD),
    new Shape([1, -1, 2, 2, 1, 0], ShapeDifficulty.HARD),
    new Shape([-1, -1, 3, 2, 1, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 0, 2, 0, 1, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 2, 2, 1, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 5, 5, 5, 8], ShapeDifficulty.HARD),
    new Shape([-1, 0, 2, 2, 1, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 1, 1, 0, 1], ShapeDifficulty.HARD),
    new Shape([-1, 5, 7, 5, 8, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 6, 5, 5, 7], ShapeDifficulty.MEDIUM),
    new Shape([0, 0, 2, 2, 3, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, 0, 2, 2, 3, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([5, 5, 7, 7, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 0, 0, 2, 3, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([0, 0, 2, 2, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 0, 2, 4, 0, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([0, 2, 2, 2, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, 0, 2, 2, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 0, 2, 1, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 2, 0, 2, 0, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 2, 0, 2, 3, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 2, 1, 2, 0, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 0, 3, 2, 0, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([3, -1, 2, 2, 0, 0], ShapeDifficulty.HARD),
    new Shape([-1, 0, 2, 0, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 0, 5, 4, 5, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 4, 4, 0, 0], ShapeDifficulty.EASY),
    new Shape([4, -1, 0, 2, 3, 0], ShapeDifficulty.HARD),
    new Shape([0, 1, -1, 2, 3, 0], ShapeDifficulty.HARD),
    new Shape([-1, -1, 7, 7, 6, 0], ShapeDifficulty.EASY),
    new Shape([0, 0, 0, 2, 3, 2], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([0, 0, 4, 2, 3, 0], ShapeDifficulty.MEDIUM),
    new Shape([2, -1, 0, 2, 3, 0], ShapeDifficulty.HARD),
    new Shape([-1, 0, 2, 2, 3, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 0, 1, 0], ShapeDifficulty.EASY),
    new Shape([-1, 5, 4, 2, 3, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 9, 7, 7, -1, 0], ShapeDifficulty.HARD),
    new Shape([3, 2, 1, 0, 0, 3], ShapeDifficulty.MEDIUM),
    new Shape([3, -1, 1, 0, 0, 3], ShapeDifficulty.HARD),
    new Shape([2, -1, 1, 2, 0, 2], ShapeDifficulty.HARD),
    new Shape([-1, 0, 1, 2, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, 2, 1, 2, 0, 2], ShapeDifficulty.HARD),
    new Shape([-1, -1, 4, 4, 4, 0], ShapeDifficulty.EASY),
    new Shape([0, 0, 4, 4, 4, 0], ShapeDifficulty.EASY, exports.CLASSIC),
    new Shape([0, 2, 1, 2, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([3, -1, 1, 0, 0, 0], ShapeDifficulty.HARD),
    new Shape([-1, -1, 1, 0, 0, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 3, 3, 1], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 3, 3, 2], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 3, -1, 0], ShapeDifficulty.HARD),
    new Shape([0, 0, 2, 1, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 6, 6, 6], ShapeDifficulty.EASY),
    new Shape([-1, 1, 3, 3, 3, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 2, 0, 0, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 0, 2, 2, -1, 5], ShapeDifficulty.HARD),
    new Shape([-1, 0, 0, 0, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([2, -1, 4, 3, 3, 0], ShapeDifficulty.HARD),
    new Shape([-1, 3, -1, 3, 2, 0], ShapeDifficulty.HARD),
    new Shape([-1, -1, 0, 3, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 1, 2, 0, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 4, 3, 2, 0], ShapeDifficulty.EASY),
    new Shape([0, 0, 2, 2, 1, 0], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, 0, 0, 0, 0, 2], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 1, 2, 1, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 2, 0, 2, 0, 1], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 2, 0, 1], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([1, -1, 0, 0, 0, 3], ShapeDifficulty.MEDIUM),
    new Shape([3, 2, 0, 0, 0, 1], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 4, 3, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 4, 4, 3, 2], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([-1, 2, 0, 2, 0, 2], ShapeDifficulty.HARD),
    new Shape([-1, 2, 0, 2, 3, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 2, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([2, 2, 0, 0, 0, 3], ShapeDifficulty.MEDIUM),
    new Shape([2, 2, 0, 0, 3, 3], ShapeDifficulty.MEDIUM),
    new Shape([3, 2, 0, 0, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([0, 0, 2, 4, 3, 2], ShapeDifficulty.MEDIUM),
    new Shape([0, 2, 0, 2, 0, 2], ShapeDifficulty.HARD),
    new Shape([-1, 0, 1, 1, 2, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([7, 9, 9, -1, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 2, 4, 4, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 2, 2, 2, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 4, 4, 4, -1, 0], ShapeDifficulty.HARD),
    new Shape([0, 2, 2, 1, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([0, -1, 4, 1, 0, 0], ShapeDifficulty.HARD),
    new Shape([2, 2, 2, 1, 0, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([0, 2, 2, 0, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([0, 2, 4, 0, 0, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([0, -1, 4, 0, 0, 0], ShapeDifficulty.HARD),
    new Shape([2, 2, 2, 0, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 3, 2, 0, 1, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 3, 5, 5, 5, 3], ShapeDifficulty.MEDIUM),
    new Shape([3, 3, 2, 0, 1, 0], ShapeDifficulty.EASY),
    new Shape([3, -1, 2, 0, 1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 3, 2, 0, 1, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 3, 5, 5, 5, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 4, 5, -1, 0], ShapeDifficulty.HARD),
    new Shape([0, 3, 2, 0, 0, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([-1, 2, 2, 0, 1, 0], ShapeDifficulty.MEDIUM),
    new Shape([3, -1, 0, 0, 1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 3, 0, 0, 1, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 3, 2, 0, 3, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 3, 2, 0, 3, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 5, 5, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 10, 12, 12, 13, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 5, 5, 5, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 3, 3, 0, 1, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 3, 0, 1, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 3, -1, 3, 3, 2], ShapeDifficulty.HARD),
    new Shape([-1, 3, 2, 3, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 2, 2, 1, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 3, 0, 0, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 3, 3, 0, 1, 1], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 3, 0, 1, 1], ShapeDifficulty.MEDIUM),
    new Shape([-1, 7, 9, 9, 10, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 3, 0, 0, 3, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 2, 4, 2, 5, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 2, 1, 3], ShapeDifficulty.MEDIUM),
    new Shape([3, 3, 0, 0, 0, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 3, 0, 0, 0, 3], ShapeDifficulty.MEDIUM),
    new Shape([3, 3, 0, 0, 1, 1], ShapeDifficulty.MEDIUM),
    new Shape([2, -1, 2, 1, 0, 0], ShapeDifficulty.HARD, exports.BAR_CHORD),
    new Shape([-1, -1, 2, 1, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, 3, 3, 0, 0, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 7, 5, 5, -1, 0], ShapeDifficulty.HARD),
    new Shape([2, 0, 0, 2, 3, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 0, 2, 3, 2], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, 0, 4, 2, 3, 2], ShapeDifficulty.HARD),
    new Shape([-1, -1, 0, 2, 3, 2], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, -1, 0, 7, 7, 5], ShapeDifficulty.MEDIUM),
    new Shape([-1, 3, 5, 3, 5, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 0, 2, 1, 2], ShapeDifficulty.MEDIUM),
    new Shape([-1, 1, -1, 0, 1, 0], ShapeDifficulty.HARD),
    new Shape([-1, -1, 0, 14, 14, 14], ShapeDifficulty.EASY),
    new Shape([-1, -1, 0, 2, 2, 2], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([5, -1, 4, 0, 3, 5], ShapeDifficulty.HARD),
    new Shape([3, -1, 0, 2, 3, 2], ShapeDifficulty.HARD),
    new Shape([0, 0, 2, 2, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 0, 0, 2, 3, 5], ShapeDifficulty.MEDIUM),
    new Shape([0, 0, 0, 2, 1, 2], ShapeDifficulty.MEDIUM),
    new Shape([2, -1, 0, 2, 1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 5, 7, 5, 7, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 2, 0, 1, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([-1, -1, 2, 2, 2, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 3, 0, 2, 1], ShapeDifficulty.MEDIUM),
    new Shape([-1, 4, 3, 4, 0, 4], ShapeDifficulty.HARD),
    new Shape([0, 2, 2, 0, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([3, -1, 0, 0, 2, 0], ShapeDifficulty.HARD),
    new Shape([-1, -1, 0, 0, 2, 0], ShapeDifficulty.EASY),
    new Shape([-1, -1, 2, 1, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, 4, 6, 6, -1, 0], ShapeDifficulty.HARD),
    new Shape([0, 2, 2, 1, 2, 0], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 1, 1, 1], ShapeDifficulty.EASY),
    new Shape([-1, 0, 0, 2, 3, 1], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 2, 1, 1], ShapeDifficulty.EASY),
    new Shape([-1, -1, 0, 5, 6, 5], ShapeDifficulty.MEDIUM),
    new Shape([3, -1, 0, 2, 1, 1], ShapeDifficulty.HARD),
    new Shape([5, -1, 0, 0, 3, 5], ShapeDifficulty.HARD),
    new Shape([3, 0, 0, 0, 3, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 0, 0, 3, 3], ShapeDifficulty.EASY),
    new Shape([-1, -1, 0, 2, 3, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 2, 3, 0], ShapeDifficulty.MEDIUM),
    new Shape([3, 0, 0, 0, 0, 3], ShapeDifficulty.MEDIUM),
    new Shape([3, 2, 0, 2, 0, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, 7, 6, 4, 5, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 0, 3, 4, 3, 4], ShapeDifficulty.MEDIUM),
    new Shape([0, 2, -1, -1, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 7, 9, 9, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 0, 0, 1, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 1, 3, 1, 3, 1], ShapeDifficulty.MEDIUM),
    new Shape([0, 2, 0, 1, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([2, 2, 0, 1, 0, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([-1, -1, 5, 3, 4, 0], ShapeDifficulty.MEDIUM),
    new Shape([3, -1, 0, 3, 3, 0], ShapeDifficulty.HARD),
    new Shape([0, 2, 2, 0, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([3, -1, 2, 0, 0, 0], ShapeDifficulty.HARD),
    new Shape([-1, 2, 5, -1, -1, 0], ShapeDifficulty.HARD),
    new Shape([0, 2, 0, 0, 3, 0], ShapeDifficulty.EASY),
    new Shape([0, 2, 2, 0, 3, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 2, 2, 0, 3, 3], ShapeDifficulty.MEDIUM),
    new Shape([-1, -1, 0, 12, 12, 12], ShapeDifficulty.EASY),
    new Shape([-1, -1, 0, 9, 8, 7], ShapeDifficulty.EASY),
    new Shape([0, -1, 0, 0, 0, 0], ShapeDifficulty.HARD),
    new Shape([-1, 10, 12, 12, 12, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 0, 0, 0, 0, 3], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([3, -1, 0, 2, 0, 0], ShapeDifficulty.HARD),
    new Shape([0, 2, 0, 0, 0, 2], ShapeDifficulty.EASY),
    new Shape([0, 2, 0, 0, 3, 2], ShapeDifficulty.MEDIUM),
    new Shape([2, 2, 0, 0, 0, 0], ShapeDifficulty.EASY),
    new Shape([0, 2, 1, 1, 0, 2], ShapeDifficulty.MEDIUM),
    new Shape([4, -1, 4, 4, 4, 0], ShapeDifficulty.HARD),
    new Shape([0, 6, 4, 0, 0, 0], ShapeDifficulty.EASY),
    new Shape([-1, 0, 3, 2, 1, 1], ShapeDifficulty.MEDIUM),
    new Shape([-1, 2, 2, 1, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 2, 1, 0, 0], ShapeDifficulty.EASY),
    new Shape([-1, 7, 9, -1, -1, 0], ShapeDifficulty.HARD),
    new Shape([-1, 2, 2, 0, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 2, 3, 2, 1, 0], ShapeDifficulty.MEDIUM),
    new Shape([1, 3, 3, 2, 0, 0], ShapeDifficulty.MEDIUM),
    new Shape([0, 0, 3, 0, 1, 3], ShapeDifficulty.MEDIUM),
    new Shape([3, 2, 0, 0, 0, 3], ShapeDifficulty.EASY),
    new Shape([3, 2, 0, 0, 3, 3], ShapeDifficulty.MEDIUM),
    new Shape([3, -1, 0, 0, 0, 3], ShapeDifficulty.HARD),
    new Shape([-1, -1, 0, 4, 3, 3], ShapeDifficulty.EASY),
    new Shape([-1, -1, 0, 7, 8, 7], ShapeDifficulty.MEDIUM),
    new Shape([3, -1, 0, 0, 3, 3], ShapeDifficulty.HARD),
    new Shape([-1, 3, 0, 0, 0, 1], ShapeDifficulty.MEDIUM),
    new Shape([-1, 0, 0, 0, 0, 1], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, 0, 1, 0, 1, 1], ShapeDifficulty.HARD),
    new Shape([-1, 0, 4, 3, 2, 0], ShapeDifficulty.MEDIUM, exports.BAR_CHORD),
    new Shape([-1, 2, 2, 2, 0, 0], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([-1, -1, 0, 3, 3, 3], ShapeDifficulty.EASY, exports.BAR_CHORD),
    new Shape([0, 0, 3, 3, 3, 3], ShapeDifficulty.EASY, exports.BAR_CHORD | exports.CLASSIC),
    new Shape([5, 0, 0, 0, 3, 0], ShapeDifficulty.EASY),
];
var compareWithKnownShapes = function (shape) {
    var _a, _b;
    var min = {
        difficulty: 50,
        shape: null,
    };
    exports.SHAPES.forEach(function (s) {
        var info = s.compare(shape);
        if (info.difficulty < min.difficulty) {
            min.difficulty = info.difficulty;
            min.shape = s;
        }
    });
    return {
        min: min.difficulty,
        extras: (_b = (_a = min === null || min === void 0 ? void 0 : min.shape) === null || _a === void 0 ? void 0 : _a.extra) !== null && _b !== void 0 ? _b : 0,
    };
};
exports.compareWithKnownShapes = compareWithKnownShapes;