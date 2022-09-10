import { AppBar, Toolbar, Typography, styled, Tab } from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)`

`
// const Anchor = styled(a)`
//     font-size:20px;
//     margin-right:20px;
//     color:inherit;
//     text-decoration:none;
// `
const Tabs = styled(NavLink)`
    font-size:20px;
    margin-right:20px;
    color:inherit;
    text-decoration:none;
`
const NavBar = () => {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Tabs to="/">DesiQnA</Tabs>
                <Tabs to="/oa">OA Prep</Tabs>
                <Tabs to="/dsa">DSA Prep</Tabs>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;