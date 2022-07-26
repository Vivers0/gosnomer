"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandartService = void 0;
class StandartService {
    getStandart(plate) {
        return plate.replace(/\s/g, ' ').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
    }
    getUpper(plate) {
        return plate.replace(/\s/g, '').toUpperCase().replace(/[@#$%^"№()&.*;]/g, '');
    }
    getRegion(plate) {
        return this.getStandart(plate).split(/[ ,]+/)[1];
    }
}
exports.StandartService = StandartService;
