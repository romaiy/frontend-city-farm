import { Stack, Title } from "@mantine/core";

type Props = {
    children?: React.ReactNode[];
};


const AccountInfoBlock = ({children}: Props) => {

    return (
        <Stack spacing={8}>
            <Title size="h5" color='gray.2' style={{fontWeight: 500}}>{children ? children[0] : <></>}</Title>
            <Title size="h3" color="gray.8">{children ? children[1] : <></>}</Title>
        </Stack>
    );
};

export default AccountInfoBlock;