import { Stack } from "@mantine/core";
import { FC } from "react";
import TitleBox from "../../components/TitleBox";
import Wrapper from "../../components/Wrappers/Wrapper";
import SeedBed from "./components/SeedBed";

const GardenPage: FC = () => {

    return (
        <Wrapper>
            <Stack spacing={'2.5rem'}>
                <TitleBox/>
                <SeedBed/>
            </Stack>
            <></>
        </Wrapper>
    );
};

export default GardenPage;