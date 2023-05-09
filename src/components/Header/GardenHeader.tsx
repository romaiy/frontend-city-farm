import { Box, Group } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../main";

interface GardenBlockProps {name: string};

const GardenBlock = ({name}:GardenBlockProps) => {

    return (
        <Box>
            {name}
        </Box>
    );
};

const GardenHeader = () => {
    const { GStore } = useContext(Context);
    
    return (
        <Group spacing={32}>
            {GStore.gardens.map(item => (
                <GardenBlock key={item._id} name={item.name}/>
            ))}
        </Group>
    );
};

export default observer(GardenHeader);