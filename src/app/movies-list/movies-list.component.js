/*@ngInject*/
class MoviesListController{
    constructor($log, $location, MoviesService){
        this.$log = $log;
        this.$location = $location;
        this.service = MoviesService;

        this.$log.debug("This is the list controller reporting for duty!");
    }

    $onInit(){
        this.service.getMovies().then((results) => {
            this.movies = results;
            this.$log.debug(`There are ${this.movies.length} movies in the collection.`);
        });
    }

    remove(movie){
        this.service.remove(movie).then((result) => {
            this.$location.path("./movies");
        });

    }
}

export var MoviesListComponent = {
    template : require("./movies-list.html"),
    controller : MoviesListController
}
