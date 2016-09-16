export class MoviesService{
    constructor($http, $log, $location, apiURL){
        this.$http = $http;
        this.$log = $log;
        this.$location = $location;
        this.apiURL = apiURL;
    }

    searchMoviesInCollection(searchTerm){
        return this.$http.get(`${this.apiURL}collection?title=${searchTerm}`)
                        .then(
            (response) => {
                return response.data;
            }
        );
    }

    searchMovies(searchTerm){
        return this.$http.get(`${this.apiURL}online?title=${searchTerm}`)
                        .then(
            (response) => {
                return response.data;
            }
        );
    }

    getMovie(id){
        return this.$http.get(`${this.apiURL}${id}`).then(
            (response) => {
                return response.data;
            },
            (error) => {
                this.$log.debug("Something Went Wong");
                this.$location.path('/404');
            }
        );
    }

    getMovies(){
        return this.$http.get(`${this.apiURL}`).then(
            (response) => {
                return response.data;
            });
    }

    add(movie){
        this.$log.debug("Adding movie!");
        return this.$http.post(`${this.apiURL}`,
            {
                "imdbId" : movie.imdbId
            }
        ).then((response) => { return response.data });
    }

    remove(movie){
        this.$log.debug("Removing movie!");
        return this.$http.delete(`${this.apiURL}${movie.id}`)
                .then((response)=> {return response.data});
    }

    markAsSeen(movie){
        return this.$http.put(`${this.apiURL}${movie.id}`,
            { seen : true }
        ).then(() => { return; });
    }
}
