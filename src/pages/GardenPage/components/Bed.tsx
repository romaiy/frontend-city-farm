import { Box, createStyles, Group, Image } from "@mantine/core";
import plus from '../../../assets/plus.svg'
import { IBed } from "../../../models/IBed";

const useStyles = createStyles(() => ({
    empty: {
        border: '2px solid #7E4B48',
        borderRadius: '16px',
        width: '110px',
        height: '110px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        transition: 'all 0.1s',
        '&:hover': {
            border: '4px solid #F6B22E',
        }
    },
    full: {
        borderRadius: '16px',
        width: '110px',
        height: '110px',
        background: '#5F302D',
        boxShadow: '1px 2px 4px rgba(0, 0, 0, 0.05), 2px 4px 15px rgba(46, 19, 19, 0.25)',
    }
}));


const Bed = ({ plant }: IBed) => {
    const { classes } = useStyles();

    return (
        <Group>
            {!plant ? 
            <Box 
                className={classes.empty}
                
                >
                <Image width={48} height={48} src={plus}/>
            </Box> 
            :
            <Box className={classes.full}>

            </Box>
            }
        </Group>
    );
};

export default Bed;