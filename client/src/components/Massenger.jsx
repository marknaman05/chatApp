import LoginDialog from "./account/LoginDialog";

import {AppBar,Toolbar ,styled ,Box} from '@mui/material';
const Header = styled(AppBar)`
    height:222px;
    background-color : #00A884;
    box-shadow : none;
`
const Component = styled(Box)`
    height : 100vh;
    background : #F0F2F5;
    box-shadow : none;
`

const Messenger = () => {
    return (
        <Component>
            <Header>
                <Toolbar>
                    
                </Toolbar>
            </Header>
            <LoginDialog/>
        </Component>
    )
}

export default Messenger;