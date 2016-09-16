class MoviePanelController {
    constructor() {}

    clicked(movie){
        this.onSelected({
            selectedMovie : movie
        });
    }
}

export var MoviePanelComponent = {
    template : require("./movie-panel.html"),
    controller : MoviePanelController,
    bindings: {
        movie: '<',
        onSelected : "&"
    }
}
