import { createStyles, Flex, Image, Stack, Title, Text, ActionIcon } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import goToShop from '../../assets/goToShop.svg';
import { Context } from "../../main";
import { LOGIN_ROUTE, PLANT_ROUT } from "../../utils/const";

const useStyles = createStyles((theme) => ({
    text: {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
    },
    image: {
        webkitTouchCallout: 'none',
        webkitUserSelect: 'none',
        khtmlUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
    },
    block: {
        '&:hover': {
            color: theme.colors.orange[5]
        }
    },
    name: {
        transition: 'all 0.1s'
    },
}));

interface PlantProps {
    _id: string;
    icon: string;
    name: string;
    price: number;
}

const Plant = ({icon, name, price, _id}: PlantProps) => {
    const { UStore } = useContext(Context);
    const { classes } = useStyles();
    const navigate = useNavigate();

    return(
        <Stack 
            onClick={UStore.isAuth ? () => navigate(PLANT_ROUT + '/' + _id) : () => navigate(LOGIN_ROUTE)} 
            className={classes.block} 
            style={{cursor: 'pointer'}} 
            spacing={9}
        >
            <Image style={{userSelect: 'none'}} className={classes.image} width={250} height={250} src={icon}/>
            <Flex gap={24}>
                <Flex w={169.2} gap={8} direction="column">
                    <Title h={36} className={classes.name} size="h4">{name}</Title>
                    <Flex gap={2} align="center" style={{justifySelf: 'flex-end'}}>
                        <Text size="p3" color="gray.8">{price} Р</Text>
                        <Text className={classes.text} color="gray.3">за кг</Text>
                    </Flex>
                </Flex>
                <ActionIcon w={56} h={56} variant="transparent">
                    <Image width={24} height={24} src={goToShop}/>
                </ActionIcon>
            </Flex>
        </Stack>
    );
};

export default observer(Plant);