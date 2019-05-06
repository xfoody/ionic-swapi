import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var SwapiService = /** @class */ (function () {
    function SwapiService(httpSvc) {
        this.httpSvc = httpSvc;
    }
    SwapiService.prototype.getPlanets = function () {
        return this.httpSvc.get("https:/swapi.co/api/planets");
    };
    SwapiService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], SwapiService);
    return SwapiService;
}());
export { SwapiService };
//# sourceMappingURL=swapi.service.js.map