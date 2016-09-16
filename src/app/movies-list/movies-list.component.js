class MoviesListController{
    constructor($log, MoviesService){
        this.$log = $log;
        this.$log.debug("This is the list controller reporting for duty!");

        this.service = MoviesService;
    }

    $onInit(){
        this.service.getMovies().then((results) => {
            this.movies = results;
            this.$log.debug(`There are ${this.movies.length} movies in the collection.`);
        });
    }
}

export var MoviesListComponent = {
    template : require("./movies-list.html"),
    controller : MoviesListController
}
