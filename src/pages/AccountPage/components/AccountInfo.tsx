import { Card, Flex, Image, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../main";
import AccountInfoBlock from "./AccountInfoBlock";

const AccountInfo = () => {
    const { UStore } = useContext(Context);

    return (
        <Card padding="1.5rem" radius="1rem" bg="#F9F9F9">
            <Flex gap={32} align="center">
                <Image width={240} height={240} radius={16} src={UStore.user.profilePictureUri}/>
                <Stack spacing={24}>
                    <AccountInfoBlock>
                        <>Имя Фамилия</>
                        {UStore.user.lastname + ' ' + UStore.user.name}
                    </AccountInfoBlock>
                    <AccountInfoBlock>
                        <>Имя пользователя</>
                        {UStore.user.username}
                    </AccountInfoBlock>
                    <AccountInfoBlock>
                        <>Почта</>
                        {UStore.user.email}
                    </AccountInfoBlock>
                </Stack>
            </Flex>
        </Card>
    );
};

export default observer(AccountInfo);