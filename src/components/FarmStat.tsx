import { Group, Stack, Image, Title, Flex, Badge, Rating, Text } from "@mantine/core";

interface FarmStatProps {
    icon: string;
    name: string;
    rating: string;
    location: string;
}

const FarmStat = ({icon, name, rating, location}: FarmStatProps) => {

    return(
        <Group spacing={16}>
            <Image src={icon} width={80} height={80}/>
            <Stack style={{width: 252}} spacing={16}>
                <Title size="h4" color="gray.8">{name}</Title>
                <Flex gap={8}>
                    <Badge style={{padding: '4px 12px'}} size="xl" variant="outline" color="orange.4">
                        <Flex align="center" gap={4}>
                        {rating}
                        <Rating defaultValue={2} count={1} readOnly color="orange.4"/>
                        </Flex>
                    </Badge>
                    <Badge style={{textTransform: 'inherit'}} size="xl" color="gray.2" variant="outline">
                        <Text size="p3">{location}</Text>
                    </Badge>
                </Flex>
            </Stack>
        </Group>
    );
};

export default FarmStat;