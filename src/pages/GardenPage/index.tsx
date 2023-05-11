import { Loader, Stack, Title } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/Wrappers/Wrapper";
import { Context } from "../../main";
import { IGarden } from "../../models/IGarden";
import SeedBed from "./components/SeedBed";

const GardenPage: FC = () => {
    const { GStore } = useContext(Context);
    const { id } = useParams();
    const [garden, setGarden] = useState<IGarden>(GStore.seleectedGarden);

    useEffect(() => {
        if (GStore.seleectedGarden._id != id && id) {
            GStore.setSelectedGarden(GStore.gardens[+id-1]);
            setGarden(GStore.seleectedGarden);
        };
    }, [id])
    

    return (
        
        <Wrapper>
            {garden ? 
                <Stack spacing={'2.5rem'}>
                    <Title size="h1" color="gray.8">{garden?.name}</Title>
                    <SeedBed/>
                </Stack> 
                :
                <Stack h={"100vh"} align="center" justify="center">
                    <Loader size="xl" color="orange.5"/>
                </Stack>
            }
            <></>
        </Wrapper>
    );
};

export default observer(GardenPage);