import { Flex } from "@mantine/core";
import BlockWrapper from "../Wrappers/BlockWrapper";
import Plant from "./Plant";
import { useContext } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";


const PlantRating = () => {
    const { PStore } = useContext(Context);

    return(
        <BlockWrapper>
            Растения недели
            <Flex gap="1rem">
                {PStore.plants.map((item) => (
                    <Plant {...item} key={item.id} />
                ))}
            </Flex>
        </BlockWrapper>
    );
};

export default observer(PlantRating);