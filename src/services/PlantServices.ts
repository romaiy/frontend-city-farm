import { AxiosResponse } from "axios";
import $api from "../http";
import { IPlant } from "../models/IPlant";
import { IPlantType } from "../models/IPlantType";

export default class PlantServices {

    static fetchTypes(): Promise<AxiosResponse<IPlantType[]>> {
        return $api.get<IPlantType[]>('/plantTypes');
    };

    static fetchPlants(): Promise<AxiosResponse<IPlant[]>> {
        return $api.get<IPlant[]>('/plants');
    };

    static selectPlant(id: number): Promise<AxiosResponse<IPlant>> {
        return $api.post<IPlant>('/plants', { id })
    };
};
