import { Card, Flex, Image, Title, Stack, Text, createStyles, Divider, Box, NumberInput, Button } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
    text: {
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
    },
    badge: {
        color: 'white',
        padding: '8px 16px',
        background: theme.colors.orange[4],
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '22px',
        borderRadius: '16px',
        display: 'inline-block',
        alignItems: 'center',
        height: '38px',
        marginTop: '16px'
    },
    input: {
        width: '390px',
    },
    btn: {
        fontWeight: 600,
        fontSize: '20px',
        lineHeight: '25px',
    }
}));

interface PlantProps {
    _id: string;
    icon: string;
    name: string;
    price: number;
    farm: string;
}

const PlantAdd = ({icon, name, price, farm}: PlantProps) => {

    const { classes } = useStyles();
    const [weight, setWeight] = useState(500);
    const [wallet, setWallet] = useState(0);

    const handleChange = (e: number) => {
        setWeight(e);
    }

    useEffect(() => {
        setWallet(price * weight/1000);
    }, [weight]);

    return(
        <Card padding="2rem" radius="1rem" bg="#F9F9F9">
            <Flex gap="2rem" align="center">
                <Image src={icon} width={'360px'} height={'360px'} radius={16}/>
                <Stack spacing={24}>
                    <Stack spacing={16}>
                        <Title size="h1" color="gray.8">{name}</Title>
                        <Stack spacing={8}>
                            <Title size="h2" color="orange.4">{wallet ? wallet : price * weight/1000} руб</Title>
                            <Text color="gray.2" className={classes.text}>{price} руб за 1 кг</Text>
                        </Stack>
                        <Divider color="#F2F2F2" size={'1px'}/>
                    </Stack>
                    <Stack style={{display: 'inline-block'}} spacing={16}>
                        <Title style={{fontWeight: 500}} size="h5" color="gray.3">Ферма</Title>
                        <Box className={classes.badge} style={{textTransform: 'inherit'}}>{farm}</Box>
                    </Stack>
                    <Flex gap={24} align="flex-end">
                        <Stack spacing={8}>
                            <Title color="gray.8" style={{fontWeight: 500}} size="h5">Количество</Title>
                            <NumberInput
                                className={classes.input}
                                size="md"
                                step={100}
                                min={0}
                                max={3000}
                                defaultValue={500}
                                value={weight}
                                onChange={(e) => handleChange(+e)}
                                parser={(value) => value.replace(/\$\s?|(,*)/g, '')}
                                formatter={(value) =>
                                    !Number.isNaN(parseFloat(value))
                                    ? `${value} грамм`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
                                    : '0 грамм'
                                }
                                radius="0.5rem"
                            />
                        </Stack>
                        <Button 
                            className={classes.btn} 
                            radius='15px' 
                            color="dark" 
                            w={164} h={57}
                            disabled={weight === 0 ? true : false}
                            
                        >
                            В корзину
                        </Button>
                    </Flex>
                </Stack>
            </Flex>
        </Card>
    );
};

export default observer(PlantAdd);