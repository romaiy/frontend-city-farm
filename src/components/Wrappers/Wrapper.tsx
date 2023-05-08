import { createStyles, Flex, rem, Stack } from "@mantine/core";

const useStyles = createStyles(() => ({
    mainWrapper: {
        padding: `${rem(32)}`,
    },
}));

type Props = {
    children?: React.ReactNode[];
};

const Wrapper = ({children}: Props) => {
    const { classes } = useStyles();

    return (
        <Flex justify="space-between" className={classes.mainWrapper} gap='1rem'>
            <Stack w={1310}>
                {children ? children[0] : <></>}
            </Stack>
            <Stack>
                {children ? children[1] : <></>}
            </Stack>
        </Flex>
    );
};

export default Wrapper;