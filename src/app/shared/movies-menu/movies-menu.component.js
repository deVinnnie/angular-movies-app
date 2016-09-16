class MoviesMenuController {
    constructor($location) {
        this.$location = $location;
        console.log("Reporting for duty");
    }

    isActive(path){
        console.log(this.$location.path());
        return (this.$location.path() === path);
    }
}

export var MoviesMenuComponent = {
    template : require("./movies-menu.html"),
    controller : MoviesMenuController
};
