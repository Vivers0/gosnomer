"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InformationService = void 0;
const regions_json_1 = __importDefault(require("../data/regions.json"));
const standarting_1 = require("./standarting");
const validator_1 = require("./validator");
// export const information = (p: string): IGosnomer | { isValid: boolean } => {
//     const isValid = validator(p);
//     let json = { isValid };
//     if (isValid) {
//         const plate = {
//             input: p,
//             number: standarting(p)
//         }
//         const region = {
//             number: getRegion(p),
//             name: regions.find(r => r.id === parseInt(getRegion(p)))?.name
//         }
//         return { ...json, plate, region };
//     }
//     return json;
// }
class InformationService {
    constructor(standartService = new standarting_1.StandartService(), validatorService = new validator_1.ValidatorService()) {
        this.standartService = standartService;
        this.validatorService = validatorService;
    }
    plate(input) {
        const standart = this.standartService.getStandart(input);
        return { standart, input };
    }
    region(input) {
        var _a;
        const standart = this.standartService.getStandart(input);
        const getPlateNumber = parseInt(this.standartService.getRegion(input));
        const region = (_a = regions_json_1.default.find(r => r.id === getPlateNumber)) === null || _a === void 0 ? void 0 : _a.name;
        return { standart, region };
    }
    getInformation(i) {
        const valid = this.validatorService.isValid(i);
        return valid
            ? {
                isValid: this.validatorService.isValid(i),
                plate: this.plate(i),
                region: this.region(i)
            }
            : { isValid: valid };
    }
}
exports.InformationService = InformationService;
