import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
var HomePage = /** @class */ (function () {
    function HomePage(sharedDataSvc) {
        this.sharedDataSvc = sharedDataSvc;
    }
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SharedDataService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map