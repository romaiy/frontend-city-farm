import { makeAutoObservable } from "mobx";
import { IGarden } from "../models/IGarden";

export default class GardenStore {
    gardens = {} as IGarden[];
    seleectedGarden = {} as IGarden;

    constructor() {
        makeAutoObservable(this);
        this.gardens = [
            {_id: '1', name: 'Грядка 1', beds: [
                {_id: '1', plant: null, growthStatus: ''},
                {_id: '2', plant: null, growthStatus: ''},
                {_id: '3', plant: null, growthStatus: ''},
                {_id: '4', plant: null, growthStatus: ''},
                {_id: '5', plant: null, growthStatus: ''},
                {_id: '6', plant: null, growthStatus: ''},
                {_id: '7', plant: null, growthStatus: ''},
                {_id: '8', plant: null, growthStatus: ''},
                {_id: '9', plant: null, growthStatus: ''},
                {_id: '10', plant: null, growthStatus: ''},
                {_id: '11', plant: null, growthStatus: ''},
                {_id: '12', plant: null, growthStatus: ''},
                {_id: '13', plant: null, growthStatus: ''},
                {_id: '14', plant: null, growthStatus: ''},
                {_id: '15', plant: null, growthStatus: ''},
                {_id: '16', plant: null, growthStatus: ''},
                {_id: '17', plant: null, growthStatus: ''},
                {_id: '18', plant: null, growthStatus: ''},
                {_id: '19', plant: null, growthStatus: ''},
                {_id: '20', plant: null, growthStatus: ''},]
            },
            {_id: '2', name: 'Грядка 2', beds: [
                {_id: '1', plant: null, growthStatus: ''},
                {_id: '2', plant: null, growthStatus: ''},
                {_id: '3', plant: null, growthStatus: ''},
                {_id: '4', plant: null, growthStatus: ''},
                {_id: '5', plant: null, growthStatus: ''},
                {_id: '6', plant: null, growthStatus: ''},
                {_id: '7', plant: null, growthStatus: ''},
                {_id: '8', plant: null, growthStatus: ''},
                {_id: '9', plant: null, growthStatus: ''},
                {_id: '10', plant: null, growthStatus: ''},
                {_id: '11', plant: null, growthStatus: ''},
                {_id: '12', plant: null, growthStatus: ''},
                {_id: '13', plant: null, growthStatus: ''},
                {_id: '14', plant: null, growthStatus: ''},
                {_id: '15', plant: null, growthStatus: ''},
                {_id: '16', plant: null, growthStatus: ''},
                {_id: '17', plant: null, growthStatus: ''},
                {_id: '18', plant: null, growthStatus: ''},
                {_id: '19', plant: null, growthStatus: ''},
                {_id: '20', plant: null, growthStatus: ''},]
            }
        ]
    };

    setSelectedGarden(garden: IGarden) {
        this.seleectedGarden = garden;
    };

}
