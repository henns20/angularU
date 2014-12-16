/**
 * Created by john on 12/11/14.
 */
angular.module("Grid", [])
    .service('GridService', function () {
       this.grid = [];
        this.tiles = [];
//        Size of board
        this.size = 4;

    });