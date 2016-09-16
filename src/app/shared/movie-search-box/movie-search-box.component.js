class MovieSearchBoxController {
    constructor() {}

    search(searchTerm){
        this.onSearch(
            { searchTerm : searchTerm }
        );
    }
}

export var MovieSearchBoxComponent = {
    template : require("./movie-search-box.html"),
    controller : MovieSearchBoxController,
    bindings : {
        onSearch : "&"
    }
};
