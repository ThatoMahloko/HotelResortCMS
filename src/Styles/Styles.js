import { makeStyles } from "@mui/styles"
const Styles = makeStyles({
    container: {
        marginTop: '5%',
        marginBottom: '5%',
    },
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '0 30px',
        marginBottom: 10
    },
    text: {
        marginBottom: 20
    },
    clear: {
        margin: 10,
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
    },
    alerts: {
        marginBottom: '1%',

    },
    toggleOut: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        marginBottom: 30,
        marginTop: 20
    },
    maintable: {
        marginBottom: '1%',
        marginTop: '1%'
    },
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textButton: {
        alignSelf: 'center'
    },
    buttonLogin: {
        width: '90%',
        marginTop: 8
    },
    tabCell: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    }

})

export default Styles