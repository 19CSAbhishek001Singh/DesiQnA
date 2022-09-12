import { Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

import { categories } from "./Data";

const StyledTable = styled(Table)`
    border:1px solid rgba(224,224,224,1);
    margin-top:5px;
`

const StyledNavLink = styled(NavLink)`
    text-decoration:none;
    color:inherit;
`

const Categories = () => {
    return (
        <>
            {/* <p>categories</p> */}
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>All Catergories</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow key={category.id}>
                                <TableCell><StyledNavLink to={`/dsa${category.type}`}>{category.type}</StyledNavLink></TableCell>
                                {/* <TableCell>{category.type}</TableCell> */}
                            </TableRow>
                        ))
                    }
                </TableBody>
            </StyledTable>
        </>

    )
}

export default Categories;