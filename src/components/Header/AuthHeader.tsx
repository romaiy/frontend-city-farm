import { Avatar, Group } from "@mantine/core";
import { NavLink } from "react-router-dom";
import avatar from '../../assets/avatar.png'
import { ACCOUNT_ROUT  } from "../../utils/const";

const AuthHeader = () => {
    return(
        <Group spacing={32}>
            <Group spacing={16}>
                
            </Group>
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