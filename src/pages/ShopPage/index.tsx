import { Stack } from "@mantine/core";
import { FC } from "react";
import PlantRating from "../../components/Plant/PlantRating";
import TitleBox from "../../components/TitleBox";
import Wrapper from "../../components/Wrappers/Wrapper";
import StoreCategories from "./components/StoreCategories";

const ShopPage: FC = () => {

    return (
        <Wrapper>
            <Stack spacing={40}>
                <TitleBox/>
                <StoreCategories/>
                <PlantRating/>
            </Stack>
            <></>
        </Wrapper>
    );
};

export default ShopPage;