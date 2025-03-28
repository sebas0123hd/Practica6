import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia, Drawer,
    List,
    ListItem, ListItemText,
    Typography
} from "@mui/material";
import {Link} from "react-router-dom";
import React, {useState} from "react";
import PokemonDetail from "./PokemonDetail";

const PokemonCard = ({item}) => {

    return ( <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <Box>
                <img src={item.sprites.front_default}/>
            </Box>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   nombre: {item.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    peso: {item.weight}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Tipo: {item.types[0].type.name}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary" component={Link} to={`/pokemonDetail/${item.id}`}>
                Detalles
            </Button>
        </CardActions>
    </Card>);
}

export default PokemonCard;