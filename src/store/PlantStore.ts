import { makeAutoObservable } from "mobx";
import { IPlant } from "../models/IPlant";
import { IPlantType } from "../models/IPlantType";

export default class PlantStore {
    plants = {} as IPlant[];
    types = {} as IPlantType[];
    selectedType = {} as IPlantType;
    isLoading = false;

    constructor() {
        makeAutoObservable(this);
        this.plants = [];
        this.types = [];
    };

    setPlants(plants: IPlant[]) {
        this.plants = plants;
    };

    setTypes(types: IPlantType[]) {
        this.types = types;
    };

    setSelectedType(type: IPlantType) {
        this.selectedType = type;
    };

    setLoading(loading: boolean) {
        this.isLoading = loading;
    }
}