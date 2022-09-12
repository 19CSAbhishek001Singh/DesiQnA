import { Grid } from "@mui/material";
import Banner from "./Banner";
import Categories from "./Categories";
import Post from "./Posts/Post";


const DsaPrep = () => {
    return (
        <>
            <Banner />
            <Grid container>
                <Grid item lg={2} sm={2} xs={12}>
                    <Categories />
                </Grid>
                <Grid item lg={10} sm={10} xs={12}>
                    <Post />
                </Grid>
            </Grid>
        </>

    )
}
export default DsaPrep;