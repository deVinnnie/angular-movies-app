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
}

export var MoviesDetailsComponent = {
    template : require("./movies-details.html"),
    controller : MoviesDetailsController
}
