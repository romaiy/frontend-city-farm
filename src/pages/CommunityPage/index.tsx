import { Stack } from "@mantine/core";
import { FC } from "react";
import TitleBox from "../../components/TitleBox";
import Wrapper from "../../components/Wrappers/Wrapper";
import FarmRating from "./components/FarmRating";
import PlantRating from "../../components/Plant/PlantRating";

const CommunityPage: FC = () => {

    return (
        <Wrapper>
            <Stack spacing="2.5rem">
                <TitleBox/>
                <FarmRating/>
                <PlantRating/>
            </Stack>
            
            <></>
        </Wrapper>
    );
};

export default CommunityPage;