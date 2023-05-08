import { Stack, Title } from "@mantine/core";

type Props = {
    children?: React.ReactNode[];
};

const BlockWrapper = ({children}: Props) => {

    return (
        <Stack spacing={24}>
            <Title style={{padding: '0 0.5rem'}} size="h2" color="gray.8">{children ? children[0] : <></>}</Title>
            <Stack>
                {children ? children[1] : <></>}
            </Stack>
            {children ? children[2] ? 
            <Stack>
                {children ? children[2] : <></>}
            </Stack>
            : <></> : <></>}
        </Stack>
    );
};

export default BlockWrapper;