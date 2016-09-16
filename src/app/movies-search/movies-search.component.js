/*@ngInject*/
class MoviesSearchController {
    constructor($http, $log, MoviesService) {
        this.$http = $http;
        this.$log = $log;
        this.service = MoviesService;

        this.$log.debug("This is the search controller reporting for duty!");
        this.results = [];
    }

    search(searchTerm){
        this.$log.debug("Searching...");
        this.service.searchMoviesInCollection(searchTerm).then((results) => {
            this.results = results;
        });
    }
}

export var MoviesSearchComponent = {
    template : require('./movies-search.html'),
    controller : MoviesSearchController
}
