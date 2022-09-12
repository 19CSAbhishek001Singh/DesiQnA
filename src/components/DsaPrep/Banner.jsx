import { Box, Typography, styled } from "@mui/material";
const Image = styled(Box)`
    background: url(https://wallpapercave.com/wp/wp6853115.png) center/55% repeat-x #000;
    width:100%;
    height:30vh;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;

`
const Heading = styled(Typography)`
    font-size:50px;
    color:#fff;
    line-height:1;
`

const SubHeading = styled(Typography)`
    font-size:30px;
    background:#fff;
`
const Banner = () => {
    return (
        <Image>
            <Heading>DSA Cracker</Heading>
            <SubHeading>By Kumar K</SubHeading>

        </Image>
    )
}

export default Banner;