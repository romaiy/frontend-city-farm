import { Card, Flex } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../main";
import Bed from "./Bed";

const SeedBed = () => {
    const { GStore } = useContext(Context);

    return (
        <Card bg={'#643735'} radius={32} padding={32}>
            <Flex gap={16} rowGap={16} wrap="wrap">
                {GStore.seleectedGarden.beds.map(item => (
                    <Bed {...item} key={item._id}/>
                ))}
            </Flex>
        </Card>
    );
};

export default observer(SeedBed);