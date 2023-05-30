
import {Dialog , Typography} from '@mui/material';

const dialogStyle = {
    //Written in camelCase format
    height: '84.58%',
    maxHeight: '100%',
    width: '79%',
    maxWidth : '100%',
    margin : '8% 0 0 0',
    overflow : 'none',

}

const LoginDialog = () => {

    return(
        <>
            <Dialog
                open = {true} 
                PaperProps = {{sx : dialogStyle}}
                hideBackdrop={true}
            >
            </Dialog>
        </>

    )
}

export default LoginDialog