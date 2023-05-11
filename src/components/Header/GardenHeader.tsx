import { Box, createStyles, Flex } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../main";
import { GARDEN_ROUT } from "../../utils/const";

interface GardenBlockProps {name: string, id: string};

const useStyles = createStyles((theme) => ({
    link: {
        padding: '16px 20px',
        borderRadius: '16px',
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: theme.fn.themeColor('orange.1'),
            color: theme.colors.orange[5],
        },
    },
}));


const GardenHeader = () => {
    const { GStore } = useContext(Context);
    const { classes } = useStyles();

    const GardenBlock = ({name, id}:GardenBlockProps) => {
        return (
            <NavLink to={GARDEN_ROUT + '/' + id}>
                <Box className={classes.link}>
                    {name}
                </Box>
            </NavLink>
        );
    };
    
    return (
        <nav id="garden">
        <Flex gap={32}>
            {GStore.gardens.map(item => (
                <GardenBlock key={item._id} name={item.name} id={item._id}/>
            ))}
        </Flex>
        </nav>
    );
};

export default observer(GardenHeader);
