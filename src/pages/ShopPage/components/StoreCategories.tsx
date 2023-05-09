import BlockWrapper from "../../../components/Wrappers/BlockWrapper";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Context } from "../../../main";
import { Flex } from "@mantine/core";
import Category from "./Category";
import PlantServices from "../../../services/PlantServices";



const StroeCategories = () => {
    const { PStore } = useContext(Context);

    useEffect(() => {
        let isCancelled = false;
        try {
            PlantServices.fetchTypes().then((response) => {
                if (!isCancelled) { 
                    PStore.setTypes(response.data)
                }
            });
        } catch (e) {
            console.log(e);
        };

        return () => {
            isCancelled = true;
        }
    }, []);

    return(
        <BlockWrapper>
            Категории
            <Flex gap={8}>
                {PStore.types.map((item) => (
                    <Category {...item} key={item._id}/>
                ))}
            </Flex>
        </BlockWrapper>
    );
};

export default observer(StroeCategories);