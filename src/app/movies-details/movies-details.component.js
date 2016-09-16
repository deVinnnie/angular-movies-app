class MoviesDetailsController{
    constructor(MoviesService, $routeParams){
        this.service = MoviesService;
        this.movieId = $routeParams.id;
        this.movie = {};
    }

    $onInit(){
        this.service.getMovie(this.movieId)
        .then((result) => {
            this.movie = result;
        });
    }

    markAsSeen(){
        this.service.markAsSeen(this.movie).then(
            () => {
            this.$onInit();
        });
    }
}

export var MoviesDetailsComponent = {
    template : require("./movies-details.html"),
    controller : MoviesDetailsController
}
