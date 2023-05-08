import { Breadcrumbs, createStyles, rem, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { authRoutes, publicRoutes } from "../utils/routes";

const useStyles = createStyles((theme) => ({
    link: {
        padding: rem(8),
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '16px',
        color: theme.colors.gray[2],
        
        '&:last-child': {
            color: theme.colors.gray[8],
        }
    },
}));

type Props = {
    BreadcrumbsOn?: boolean;
};

const TitleBox = ({BreadcrumbsOn}: Props) => {
    const location = useLocation();
    const [title, setTitle] = useState<string>('');
    const { classes } = useStyles();

    useEffect(() => {
        const titleIdPublic = publicRoutes.map(e => e.path).indexOf(location.pathname);
        if (titleIdPublic !== -1) {
            setTitle(publicRoutes[titleIdPublic].title);
        } else {
            const titleIdAuth = authRoutes.map(e => e.path).indexOf(location.pathname);
            setTitle(authRoutes[titleIdAuth].title);
        };
    }, []);

    const items = [{title: 'Главная'}, {title: title}].map((item, path) => (
        <Text className={classes.link} key={path}>
            {item.title}
        </Text>
    ));

    return(
        <Stack spacing="0.25rem">
            <Title style={{padding: '0 0.5rem'}} size="h1" color="gray.8">{title}</Title>
            {BreadcrumbsOn ? <Breadcrumbs>{items}</Breadcrumbs> : <></>}
        </Stack>
    );
};

export default TitleBox;