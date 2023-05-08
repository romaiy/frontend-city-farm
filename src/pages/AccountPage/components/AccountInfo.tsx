import { Card, Flex, Image, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../main";
import avatar from '../../../assets/avatar.png'
import AccountInfoBlock from "./AccountInfoBlock";

const AccountInfo = () => {
    const { UStore } = useContext(Context);

    return (
        <Card padding="1.5rem" radius="1rem" bg="#F9F9F9">
            <Flex gap={32} align="center">
                <Image width={240} height={240} radius={16} src={avatar}/>
                <Stack spacing={24}>
                    <AccountInfoBlock>
                        <>Имя Фамилия</>
                        Юлия Макарова
                    </AccountInfoBlock>
                    <AccountInfoBlock>
                        <>Имя пользователя</>
                        Juli87
                    </AccountInfoBlock>
                    <AccountInfoBlock>
                        <>Почта</>
                        Hilton_Cruickshank0@hotmail.com
                    </AccountInfoBlock>
                </Stack>
            </Flex>
        </Card>
    );
};

export default observer(AccountInfo);