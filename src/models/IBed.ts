import { IPlant } from "./IPlant";

export interface IBed {
    _id: string;
    plant: IPlant | null;
    growthStatus: string | null;
};