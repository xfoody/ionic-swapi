import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { SwapiService } from '../swapi.service';
var ListPage = /** @class */ (function () {
    function ListPage(fooSvc, swapiSvc) {
        this.fooSvc = fooSvc;
        this.swapiSvc = swapiSvc;
        this.icons = [
            'flask',
            'wifi',
            'beer',
            'football',
            'basketball',
            'paper-plane',
            'american-football',
            'boat',
            'bluetooth',
            'build'
        ];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.ngOnInit = function () {
        this.swapiSvc.getPlanets().subscribe(function (data) {
            console.log(data);
        }, function (error) { return console.log(error); });
    };
    ListPage = tslib_1.__decorate([
        Component({
            selector: 'app-list',
            templateUrl: 'list.page.html',
            styleUrls: ['list.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [SharedDataService,
            SwapiService])
    ], ListPage);
    return ListPage;
}());
export { ListPage };
//# sourceMappingURL=list.page.js.map