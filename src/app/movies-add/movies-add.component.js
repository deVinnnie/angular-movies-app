/*@ngInject*/
class MoviesAddController {
    constructor($log, $location, MoviesService) {
        this.$log = $log;
        this.$location = $location;
        this.service = MoviesService;
    }

    /**
    Add Movie to Collection
    */
    add(movie){
        this.service.add(movie)
                    .then((result) => {
            this.$location.path("/movies");
        });
    }

    search(searchTerm){
        this.$log.debug("Searching...");
        this.service.searchMovies(searchTerm).then((results) => {
            this.results = results;
        });
    }
}

export var MoviesAddComponent = {
    template : require("./movies-add.html"),
    controller : MoviesAddController
}
