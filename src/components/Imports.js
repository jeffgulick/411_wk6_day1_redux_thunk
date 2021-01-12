import React from 'react';
import { Container, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';

const Imports = (props) => {
    return (
        <Container>
            {/* <button onClick={props.fetchMakes}>klkkjj</button> */}
            <Button variant="contained" color="primary" onClick = {()=>props.fetchMakes()}>Import</Button>
            <h1>COUNT: <span>{props.makes.length}</span> </h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((car, index)=>(
                        <TableRow key={car.MakeId}>
                            <TableCell>{car.MakeId}</TableCell>
                            <TableCell>{car.MakeName}</TableCell>
                            <TableCell>{car.MakeName}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Imports