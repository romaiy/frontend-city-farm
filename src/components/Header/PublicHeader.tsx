import { Button, Group } from "@mantine/core";
import { NavLink } from "react-router-dom";

interface PuclicHeaderProps {
    classes: {links: string; button: string}; items: JSX.Element[];}

const PuclicHeader = ({classes, items}: PuclicHeaderProps) => {
    return(
        <Group spacing={48}>
            <Group spacing={32} className={classes.links}>
                {items}
            </Group>
            <NavLink to="/login">
                <Button className={classes.button} color="dark" radius="md" size="md">
                    Вход
                </Button>
            </NavLink>
        </Group>
    );
};

export default PuclicHeader;
