import { makeAutoObservable } from "mobx";
import { IPlant } from "../models/IPlant";
import { IPlantType } from "../models/IPlantType";

import image1 from '../assets/mockdata/plant/1.png';
import image2 from '../assets/mockdata/plant/2.png';
import image3 from '../assets/mockdata/plant/3.png';
import image4 from '../assets/mockdata/plant/4.png';
import image5 from '../assets/mockdata/plant/5.png';

import bgImage1 from '../assets/mockdata/type/4.png';
import bgImage2 from '../assets/mockdata/type/3.png';
import bgImage3 from '../assets/mockdata/type/1.png';
import bgImage4 from '../assets/mockdata/type/2.png';
import bgImage5 from '../assets/mockdata/type/5.png';

export default class PlantStore {
    plants = {} as IPlant[];
    types = {} as IPlantType[];
    selectedType = {} as IPlantType;

    constructor() {
        makeAutoObservable(this);
        this.plants = [
            { id: 1, icon: image1, name: 'Помидоры', price: '24', type: 'Овощи долгорастущие', farm: '' },
            { id: 2, icon: image2, name: 'Огурцы сибирский среднячок', price: '24', type: 'Овощи быстрорастущие', farm: '' },
            { id: 3, icon: image3, name: 'Капуста пекинская', price: '65', type: 'Зеленые растения', farm: '' },
            { id: 4, icon: image4, name: 'Клубника большая', price: '12', type: 'Фрукты и ягоды', farm: '' },
            { id: 5, icon: image5, name: 'Апельсины морокко', price: '24', type: 'Фрукты и ягоды', farm: '' },
        ];
        this.types = [
            { id: 1, name: 'Овощи долгорастущие', image: bgImage1 },
            { id: 2, name: 'Овощи быстрорастущие', image: bgImage2 },
            { id: 3, name: 'Зеленые растения', image: bgImage3 },
            { id: 4, name: 'Микрозелень', image: bgImage4 },
            { id: 5, name: 'Фрукты и ягоды', image: bgImage5 },
        ];
    };

    setPlants(plants: IPlant[]) {
        this.plants = plants;
    };

    setTypes(types: IPlantType[]) {
        this.types = types;
    };

    setSelectedType(type: IPlantType) {
        this.selectedType = type;
    }
}