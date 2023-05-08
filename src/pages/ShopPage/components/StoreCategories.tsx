import BlockWrapper from "../../../components/Wrappers/BlockWrapper";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../../../main";
import { Flex } from "@mantine/core";
import Category from "./Category";



const StroeCategories = () => {
    const { PStore } = useContext(Context);

    return(
        <BlockWrapper>
            Категории
            <Flex gap={8}>
                {PStore.types.map((item) => (
                    <Category {...item} key={item.id}/>
                ))}
            </Flex>
        </BlockWrapper>
    );
};

export default observer(StroeCategories);