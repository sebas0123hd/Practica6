import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PokemonEvolution = ({ evolution }) => {
    return (
        <Card sx={{ textAlign: "center", padding: 2 }}>
            <CardMedia
                component="img"
                image={evolution.image}
                alt={evolution.name}
                sx={{ height: 80, objectFit: "contain" }}
            />
            <CardContent>
                <Typography variant="h6">{evolution.name.toUpperCase()}</Typography>
                <Link to={`/pokemon/${evolution.name}`} style={{ textDecoration: "none", color: "blue" }}>
                    Details
                </Link>
            </CardContent>
        </Card>
    );
};

export default PokemonEvolution;
