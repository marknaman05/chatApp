
import {Dialog , List, ListItem, Typography , Box , styled} from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';


const  Component = styled(Box)`
    display : flex;
`

const Container = styled(Box)`
    padding : 64px ;
`

const QRCode = styled('img')({
    margin : '5vh 5vh 0 10vw',
    paddingTop : '10px',
    height : 264,
    width: 264,
})

const Title = styled(Typography)`
    font-size: 28px;
    font-weight: 300;
    line-height: normal;
    color: #41525d;
    font-family : inherit;
    margin-bottom : 25px;
`
const StyledList = styled(List)`
    & > li {
        padding : 0;
        margin-top : 15px;
        font-size : 18px;
        line-height : 20px;
        color: #4a4a4a

    }
`


const dialogStyle = {
    //Written in camelCase format
    height: '84.58%',
    maxHeight: '100%',
    width: '79%',
    maxWidth : '100%',
    margin : '8% 0 0 0',
    overflow : 'hidden',

}

const LoginDialog = () => {

    const onLoginSuccess = (res) => {
        const decoded = jwt_decode(res.credential);
        console.log(decoded);
    }

    const onLoginError = (res) => {
        console.log("Login Failed" , res);
    }

    return(
        <>
            <Dialog
                open = {true} 
                PaperProps = {{sx : dialogStyle}}
                hideBackdrop={true}
            >
                <Component>
                    <Container>
                        <Title>Use WhatsApp on your computer</Title>
                        <StyledList>
                            <ListItem>
                            1. Open WhatsApp on your phone
                            </ListItem>
                            <ListItem>
                            2. Tap Menu or Settings and select Linked Devices
                            </ListItem>
                            <ListItem>
                            3. Tap on Link a device
                            </ListItem>
                            <ListItem>
                            4. Point your phone to this screen to capture the QR code
                            </ListItem>
                        </StyledList>
                    </Container>
                    <Box style = {{position : 'relative'}}>
                        <QRCode src={qrCodeImage} alt="QRCode" />
                        <Box style = {{position : 'absolute' , top : '' , right : '10vh'}}>
                            <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginError}/>
                        </Box>
                    </Box>
                </Component>
            </Dialog>

        </>

    )
}

export default LoginDialog