import { BackgroundImage, Box, Title } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../../main";

interface CategoryProps {
    id: number,
    image: string;
    name: string;
}

const Category = ({ id, image, name}: CategoryProps) => {
    const { PStore } = useContext(Context);
    const navigate = useNavigate();

    const handleSelect = () => {
        PStore.setSelectedType({id: id, name: name, image: image});
        navigate(`/shop/category`)
    };

    return(
        <Box onClick={handleSelect} w={192} h={158} style={{cursor: 'pointer'}}>
            <BackgroundImage style={{padding: '24px 24px 98px'}}  radius={16} src={image}>
                <Title w={144} h={36} size="h4" color="gray.8">{name}</Title>
            </BackgroundImage>
        </Box>
    );
};

export default observer(Category);