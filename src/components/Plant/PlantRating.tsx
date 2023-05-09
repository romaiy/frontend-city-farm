import { Flex } from "@mantine/core";
import BlockWrapper from "../Wrappers/BlockWrapper";
import Plant from "./Plant";
import { useContext, useEffect } from "react";
import { Context } from "../../main";
import { observer } from "mobx-react-lite";
import PlantServices from "../../services/PlantServices";


const PlantRating = () => {
    const { PStore } = useContext(Context);
    
    useEffect(() => {
        let isCancelled = false;
        try {
            PlantServices.fetchPlants().then((response) => {
                if (!isCancelled) {
                    PStore.setPlants(response.data)
                }
            });
        } catch (e) {
            console.log(e)
        };
        return () => {
            isCancelled = true;
        };
    }, []);

    return(
        <BlockWrapper>
            Растения недели
            <Flex gap="1rem">
                {PStore.plants.map((item, index) => {
                    if (index < 5) {
                        return (
                            <Plant {...item} key={item._id} />
                        );
                    }
                })}
            </Flex>
        </BlockWrapper>
    );
};

export default observer(PlantRating);