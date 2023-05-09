import { Breadcrumbs, Flex, Stack, Title, Text, createStyles, rem } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Plant from "../../../components/Plant/Plant";
import BlockWrapper from "../../../components/Wrappers/BlockWrapper";
import Wrapper from "../../../components/Wrappers/Wrapper";
import { Context } from "../../../main";

const useStyles = createStyles((theme) => ({
    link: {
        padding: rem(8),
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
        color: theme.colors.gray[2],
        cursor: 'pointer',
        '&:last-child': {
            color: theme.colors.gray[8],
        }
    },
}));

const CategoryPage: FC = () => {
    const { classes } = useStyles();
    const { PStore } = useContext(Context);
    const navigate = useNavigate();
    
    const items = [{title: 'Маркет'}, {title: PStore.selectedType.name}].map((item, path) => (
        <Text 
            onClick={item.title===PStore.selectedType.name ? undefined : () => navigate(-1)} 
            className={classes.link} 
            key={path}
            style={ item.title===PStore.selectedType.name ? {cursor: 'default'} : {}}
        >
            {item.title}
        </Text>
    ));

    return (
        <Wrapper>
            <Stack spacing={40}>
                <Stack spacing="0.25rem">
                    <Title style={{padding: '0 0.5rem'}} size="h1" color="gray.8">Маркет</Title>
                    <Breadcrumbs>{items}</Breadcrumbs>
                </Stack>
                <BlockWrapper>
                    <></>
                    <Flex gap="1rem">
                        {PStore.plants.map((item) => {
                            if (item.type === PStore.selectedType.name) {
                                return <Plant {...item} key={item._id}/>
                            }
                        })}
                    </Flex>
                </BlockWrapper>
            </Stack>
            <></>
        </Wrapper>
    );
};

export default observer(CategoryPage);