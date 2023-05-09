import { AxiosResponse } from "axios";
import $api from "../http";
import { IPlant } from "../models/IPlant";
import { IPlantType } from "../models/IPlantType";

export default class PlantServices {

    static fetchTypes(): Promise<AxiosResponse<IPlantType[]>> {
        return $api.get<IPlantType[]>('/types');
    };

    static fetchPlants(): Promise<AxiosResponse<IPlant[]>> {
        return $api.get<IPlant[]>('/lots');
    };

    static selectPlant(id: string): Promise<AxiosResponse<IPlant>> {
        return $api.get<IPlant>('/lot' + '/' + id)
    };
};
