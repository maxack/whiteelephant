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

var item1 = {itemImage: imageFromSource("01.jpg"), itemName: "max"};
var item2 = {itemImage: imageFromSource("02.jpg"), itemName: "max"};
var item3 = {itemImage: imageFromSource("03.jpg"), itemName: "max"};
var item4 = {itemImage: imageFromSource("04.jpg"), itemName: "max"};
var item5 = {itemImage: imageFromSource("05.jpg"), itemName: "max"};
var item6 = {itemImage: imageFromSource("06.jpg"), itemName: "max"};
var item7 = {itemImage: imageFromSource("07.jpg"), itemName: "max"};
var item8 = {itemImage: imageFromSource("08.jpg"), itemName: "max"};

localImagesArray.push([item1, item2, item3, item4, item5, item6, item7, item8]);

var elephantsModel = new observable.Observable();

Object.defineProperty(elephantsModel, "photoItems", {
    get: function() {
        return localImagesArray;
    },
    enumerable: true,
    configurable: true
});

exports.elephantsModel = elephantsModel;
