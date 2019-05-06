import { TestBed } from '@angular/core/testing';
import { SwapiService } from './swapi.service';
describe('SwapiService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(SwapiService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=swapi.service.spec.js.map