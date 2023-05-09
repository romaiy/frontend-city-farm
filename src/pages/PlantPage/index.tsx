import { Loader, Stack, Title } from "@mantine/core";
import { FC, useContext, useEffect, useState} from "react";
import Wrapper from "../../components/Wrappers/Wrapper";
import PlantAdd from "./components/PlantAdd";
import PlantInfo from "./components/PlantInfo";
import { Context } from "../../main";
import PlantServices from "../../services/PlantServices";
import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { IPlant } from "../../models/IPlant";

const PlantPage: FC = () => {
    const { PStore } = useContext(Context);
    const [plant, setPlant] = useState<IPlant>()
    const {id} = useParams();
    
    useEffect(() => {
        let isCancelled = false;
        setPlant(undefined);
        try {
            PStore.setLoading(true);
            PlantServices.selectPlant(id ? id : '1').then((response) => {
                if (!isCancelled) { 
                    setPlant(response.data)
                }
            });
        } catch (e) {
            console.log(e);
        } finally {
            PStore.setLoading(false);
        };

        return () => {
            isCancelled = true;
        }
    }, []);

    return (
        <Wrapper>
            <Stack spacing="2.5rem">
                <Title style={{padding: '0 0.5rem'}} size="h1" color="gray.8">Маркет</Title>
                {plant ? 
                    <Stack spacing="1rem">
                        <PlantAdd {...plant}/> 
                        <PlantInfo/>
                    </Stack> 
                    :
                    <Stack h={"100vh"} align="center" justify="center">
                        <Loader size="xl" color="orange.5"/>
                    </Stack>
                }
            </Stack>
            <></>
        </Wrapper>
    );
};

export default observer(PlantPage);