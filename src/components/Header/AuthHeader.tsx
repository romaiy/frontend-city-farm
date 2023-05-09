import { Avatar, Group } from "@mantine/core";
import { NavLink, useLocation } from "react-router-dom";
import avatar from '../../assets/avatar.png'
import { ACCOUNT_ROUT  } from "../../utils/const";
import GardenHeader from "./GardenHeader";

const AuthHeader = () => {
    const location = useLocation();

    return(
        <Group spacing={32}>
            {location.pathname === '/garden' ? <GardenHeader/> : <></>}
            <NavLink to={ACCOUNT_ROUT}>
                <Avatar
                    size="3.5rem"
                    radius="xl"
                    src={avatar}
                    alt="it's me"
                />
            </NavLink>
            
        </Group>
    );
};

export default AuthHeader;