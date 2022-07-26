export interface IPlate {
    standart: string;
    input: string;
}
export interface IRegion {
    standart: string;
    region: string | undefined;
}
export declare type IGosnomer = {
    isValid: boolean;
    plate: IPlate;
    region: IRegion;
};
