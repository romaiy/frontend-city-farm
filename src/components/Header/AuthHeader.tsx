import { Avatar, Flex } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Context } from "../../main";
import { ACCOUNT_ROUT  } from "../../utils/const";
import GardenHeader from "./GardenHeader";

const AuthHeader = () => {
    const location = useLocation();
    const { UStore } = useContext(Context);

    return(
        <Flex gap={32}>
            {location.pathname.indexOf('/garden') ? <></> : <GardenHeader/>}
            <NavLink to={ACCOUNT_ROUT}>
                <Avatar
                    size="3.5rem"
                    radius="xl"
                    src={UStore.user.profilePictureUri}
                    alt="it's me"
                />
            </NavLink>
        </Flex>
    );
};

export default observer(AuthHeader);