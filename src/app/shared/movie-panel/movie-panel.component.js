/*@ngInject*/
class MoviePanelController {
    constructor() {}

    clicked(movie){
        this.onSelected({
            selectedMovie : movie
        });
    }

    selectRemove(movie){
        this.onRemove({
            selectedMovie : movie
        });
    }
}

export var MoviePanelComponent = {
    template : require("./movie-panel.html"),
    controller : MoviePanelController,
    bindings: {
        movie: '<',
        inCollection : '<',
        onSelected : "&",
        onRemove : "&"
    }
}
