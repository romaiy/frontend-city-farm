import { IBed } from "./IBed";

export interface IGarden {
    _id: string;
    name: string;
    beds: IBed[];
};