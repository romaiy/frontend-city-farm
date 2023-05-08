import { Flex, Title } from "@mantine/core";

import image1 from '../../../assets/mockdata/1.png';
import image2 from '../../../assets/mockdata/2.png';
import image3 from '../../../assets/mockdata/3.png';
import image4 from '../../../assets/mockdata/4.png';
import image5 from '../../../assets/mockdata/5.png';
import image6 from '../../../assets/mockdata/6.png';
import BlockWrapper from "../../../components/Wrappers/BlockWrapper";
import FarmStat from "../../../components/FarmStat";

const mockdata = [
    { icon: image1, name: 'Умная ферма на Тарской', rating: '4,9', location: 'В городе' },
    { icon: image2, name: 'Умная ферма “Ням ням”', rating: '4,72', location: 'В городе' },
    { icon: image3, name: 'Животная ферма', rating: '4,5', location: 'За городом' },
    { icon: image4, name: 'Ферма для Веганов', rating: '4,43', location: 'За городом' },
    { icon: image5, name: 'Озеленение', rating: '4,3', location: 'В городе' },
    { icon: image6, name: 'Фруктовый рай', rating: '4,25', location: 'За городом' },
];

const FarmRating = () => {
    return(
        <BlockWrapper>
            Топ 6 ферм месяца
            <Flex h={320} gap="4rem" rowGap="1rem" direction="column" wrap="wrap" justify="space-between">
                {mockdata.map((item, index) => (
                    <Flex 
                        style={
                            ((index+1)%3) ? 
                            {width: '623px', padding:'8px 0 7px 0', borderBottom: '1px solid #F2F2F2'} :
                            {width: '623px', padding:'8px 0'}
                        } 
                        key={item.name} 
                        align="center" 
                        gap="1.5rem"
                    >
                        <Title size="h2" color={index+1 > 3 ? "gray.2" : "orange.4"}>{index+1}</Title>
                        <FarmStat {...item}/>
                    </Flex>
                ))}
            </Flex>
        </BlockWrapper>
    );
};

export default FarmRating;