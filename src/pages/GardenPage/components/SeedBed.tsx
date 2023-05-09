import { Card, Flex } from "@mantine/core";
import Bed from "./Bed";

const SeedBed = () => {
    const data = {_id: '1', name: 'Грядка 1', beds: [
        {_id: '1', plant: null, growthStatus: ''},
        {_id: '2', plant: null, growthStatus: ''},
        {_id: '3', plant: null, growthStatus: ''},
        {_id: '4', plant: null, growthStatus: ''},
        {_id: '5', plant: null, growthStatus: ''},
        {_id: '6', plant: null, growthStatus: ''},
        {_id: '7', plant: { _id: '1', icon: '', name: 'Помидоры', price: 24, type: 'Овощи долгорастущие', farm: '' }, growthStatus: ''},
        {_id: '8', plant: null, growthStatus: ''},
        {_id: '9', plant: null, growthStatus: ''},
        {_id: '10', plant: null, growthStatus: ''},
        {_id: '11', plant: null, growthStatus: ''},
        {_id: '12', plant: null, growthStatus: ''},
        {_id: '13', plant: { _id: '1', icon: '', name: 'Помидоры', price: 24, type: 'Овощи долгорастущие', farm: '' }, growthStatus: ''},
        {_id: '14', plant: null, growthStatus: ''},
        {_id: '15', plant: null, growthStatus: ''},
        {_id: '16', plant: null, growthStatus: ''},
        {_id: '17', plant: null, growthStatus: ''},
        {_id: '18', plant: null, growthStatus: ''},
        {_id: '19', plant: null, growthStatus: ''},
        {_id: '20', plant: null, growthStatus: ''},]
    }

    return (
        <Card bg={'#643735'} radius={32} padding={32}>
            <Flex gap={16} rowGap={16} wrap="wrap">
                {data.beds.map(item => (
                    <Bed {...item} key={item._id}/>
                ))}
            </Flex>
        </Card>
    );
};

export default SeedBed;