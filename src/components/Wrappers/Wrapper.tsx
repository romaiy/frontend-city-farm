import { createStyles, Flex, rem, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../main";

const useStyles = createStyles((theme, isAuth:boolean) => ({
    mainWrapper: {
        padding: isAuth ? `${rem(32)}` : '32px 80px 34px 80px',
    },
}));

type Props = {
    children?: React.ReactNode[];
};

const Wrapper = ({children}: Props) => {
    const { UStore } = useContext(Context);
    const { classes } = useStyles(UStore.isAuth);

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

export default observer(Wrapper);