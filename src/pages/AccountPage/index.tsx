import { Stack } from "@mantine/core";
import { FC } from "react";
import TitleBox from "../../components/TitleBox";
import Wrapper from "../../components/Wrappers/Wrapper";
import AccountInfo from "./components/AccountInfo";
import AccountOrders from "./components/AccountOrders";

const AccountPage: FC = () => {

    return (
        <Wrapper>
            <Stack spacing="2.5rem">
                <TitleBox/>
                <AccountInfo/>
                <AccountOrders/>
            </Stack>
            <></>
        </Wrapper>
    );
};

export default AccountPage;