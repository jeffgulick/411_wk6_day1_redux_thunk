import React from 'react';
import { Container, Button, Table, TableBody, TableCell, TableHead, TableRow, Menu, MenuItem, IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Imports = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    let indexDelete = '';

    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget);
        indexDelete = index;
      };

      const handleClose = () => {
        setAnchorEl(null);
        props.deleteMakes(indexDelete);
      };


    return (
        <Container>
            <Button style={{marginTop:"15px"}} variant="contained" color="primary" onClick = {props.fetchMakes}>Import</Button>
            <h1>COUNT: {props.makes.length}</h1>
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
                            <TableCell>
                            <IconButton>
                                <MoreVertIcon onClick={(event)=>handleClick(event, index)} aria-controls="simple-menu" aria-haspopup="true"  />
                            </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Menu 
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose}>Delete</MenuItem>
            </Menu>
        </Container>
    )
}

export default Imports