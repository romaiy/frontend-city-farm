import { Stack, Title } from "@mantine/core";
import { FC } from "react";
import Wrapper from "../../components/Wrappers/Wrapper";

import image2 from '../../assets/mockdata/plant/2.png';
import PlantAdd from "./components/PlantAdd";
import PlantInfo from "./components/PlantInfo";

const PlantPage: FC = () => {
    const plant = { id: 2, icon: image2, name: 'Огурцы сибирский среднячок', price: '24', type: 'Овощи быстрорастущие', farm: '“Ням ням”' };

    return (
        <Wrapper>
            <Stack spacing="2.5rem">
                <Title style={{padding: '0 0.5rem'}} size="h1" color="gray.8">Маркет</Title>
                <Stack spacing="1rem">
                    <PlantAdd {...plant}/>
                    <PlantInfo/>
                </Stack>
            </Stack>
            <></>
        </Wrapper>
    );
};

export default PlantPage;