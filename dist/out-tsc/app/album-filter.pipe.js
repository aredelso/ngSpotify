var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var AlbumFilterPipe = (function () {
    function AlbumFilterPipe() {
    }
    AlbumFilterPipe.prototype.transform = function (albums, args) {
        console.log(albums);
        var filter = args[0].toLowerCase();
        return filter ? albums.filter(function (album) { return album.album_type.toLowerCase().indexOf(filter) != -1; }) : albums;
    };
    return AlbumFilterPipe;
}());
AlbumFilterPipe = __decorate([
    Pipe({
        name: 'albumFilter'
    })
], AlbumFilterPipe);
export { AlbumFilterPipe };
//# sourceMappingURL=../../../src/app/album-filter.pipe.js.map