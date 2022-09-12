import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper, styled } from "@mui/material";

const StyledTableCell = styled(TableCell)`
    font-size:20px;
`
const Array = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '100vh' }}>
            <Table style={{ "margin": "10px" }} stickyHeader>
                <TableHead>
                    <TableRow>
                        <StyledTableCell align='center'>SNo.</StyledTableCell>
                        <StyledTableCell>Array Questions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell align='center'>{row.id}</TableCell>
                                <TableCell ><a href={row.link} style={{ "textDecoration": 'none', "color": "inherit" }}>{row.question}</a></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer >
    )
}
const tableData = [
    {
        "id": 1,
        "question": "Peak element",
        "link": "https://practice.geeksforgeeks.org/problems/peak-element/1"
    },
    {
        "id": 2,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 3,
        "question": "Reverse an Array",
        "link": "https://practice.geeksforgeeks.org/problems/reverse-an-array/0"
    },
    {
        "id": 4,
        "question": "Kth smallest element",
        "link": "https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1"
    },
    {
        "id": 5,
        "question": "Minimize the Heights II",
        "link": "https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1#"
    },
    {
        "id": 6,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 7,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 8,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
    {
        "id": 9,
        "question": "Subarray with given sum element",
        "link": "https://practice.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1"
    },
]
export default Array;