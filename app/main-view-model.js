var observable = require("data/observable");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var observableArrayModule = require("data/observable-array");
var enums = require("ui/enums");

var localImagesArray = new observableArrayModule.ObservableArray();
var directory = "res/";

function imageFromSource(imageName) {
    return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));
}

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var item1 = {itemImage: imageFromSource("01.jpg"), itemName: "Matt"};
var item2 = {itemImage: imageFromSource("02.jpg"), itemName: "Seth"};
var item3 = {itemImage: imageFromSource("03.jpg"), itemName: "Nicole"};
var item4 = {itemImage: imageFromSource("04.jpg"), itemName: "Samantha"};
var item5 = {itemImage: imageFromSource("05.jpg"), itemName: "Brian"};
var item6 = {itemImage: imageFromSource("06.jpg"), itemName: "Jon"};
var item7 = {itemImage: imageFromSource("07.jpg"), itemName: "Chris S"};
var item8 = {itemImage: imageFromSource("08.jpg"), itemName: "Jake"};
var item9 = {itemImage: imageFromSource("09.jpg"), itemName: "Jarom"};
var item10 = {itemImage: imageFromSource("10.jpg"), itemName: "Chris H"};
var item11 = {itemImage: imageFromSource("11.jpg"), itemName: "Alain"};
var item12 = {itemImage: imageFromSource("12.jpg"), itemName: "max"};

var people = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];

shuffleArray(people);

//localImagesArray.push([item1, item2, item3,item6, item7, item8]);

var elephantsModel = new observable.Observable();

Object.defineProperty(elephantsModel, "photoItems", {
    get: function() {
        return localImagesArray;
    },
    enumerable: true,
    configurable: true
});

elephantsModel.tapAction = function() {
    if (people.length > 0) {
        localImagesArray.push(people.pop());
    } 
};

exports.elephantsModel = elephantsModel;
