import { Box, makeStyles, Typography } from '@material-ui/core';
// import  from '@material-ui/icons/LocationOn';
// import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';
// import OpacityIcon from '@material-ui/icons/Opacity';
// import Brightness5Icon from '@material-ui/icons/Brightness5';
// import Brightness6Icon from '@material-ui/icons/Brightness6';
// import DehazeIcon from '@material-ui/icons/Dehaze';
// import CloudIcon from '@material-ui/icons/Cloud';

const useStyles = makeStyles({
    component: {
        margin: '55px 70px'
    },
    container: {
        display: 'flex',
    },
    row: {
        padding: 5,
        fontSize: 20,
        letterSpacing: 2,
    },
    value: {
        color: '#fff'
    },
    icon: {
        color: 'darkred',
        marginRight: 15
    },
    error: {
        background: 'red',
        color: '#fff',
        margin: 50,
        padding: 20
    }
})

const Info = ({ data, city, country }) => {
    const classes = useStyles();

    const getCloudsData = (value) => {
        if(value === 0){
            return 'Clear';
        }else if(value > 1 && value < 100){
            return 'Partially Cloudy';
        }else{
            return 'Cloudy';
        }
    }

    return (
        data && city && country ?
            <Box className={classes.component}>
                <Typography className={classes.row}>Location: <Box className={classes.value} component="span">{data.name}, {data.sys.country} </Box></Typography>
                <Typography className={classes.row}>Temperature: <Box className={classes.value} component="span">{data.main.temp}°C </Box></Typography>
                <Typography className={classes.row}>Humidity: <Box className={classes.value} component="span">{data.main.humidity}% </Box></Typography>
                <Typography className={classes.row}>Sun Rise: <Box className={classes.value} component="span">{new Date(data.sys.sunrise * 1000).toLocaleTimeString()} </Box></Typography>
                <Typography className={classes.row}>Sun Set: <Box className={classes.value} component="span">{new Date(data.sys.sunset * 1000).toLocaleTimeString()} </Box></Typography> 
                <Typography className={classes.row}>Condition: <Box className={classes.value} component="span">{data.weather[0].main} </Box></Typography>
                <Typography className={classes.row}>Clouds: <Box className={classes.value} component="span">{getCloudsData(data.clouds.all)} </Box></Typography>
            </Box>
        : !(city && country) ? <Typography className={classes.error}>Please Enter the values to check Weather</Typography> : ''
    )
}

export default Info;