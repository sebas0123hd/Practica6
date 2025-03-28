import { Box, Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";

const PokemonDetail = ({ item }) => {
    if (!item) {
        return <Typography>Cargando datos...</Typography>;
    }

    // Extraer propiedades con los nombres correctos
    const imageUrl = item.sprites?.front_default || "https://via.placeholder.com/150";
    const typeNames = item.types?.map((t) => t.type.name).join(", ") || "Desconocido";

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <Box>
                    <img src={imageUrl} alt={item.name} />
                </Box>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nombre: {item.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Peso: {item.weight}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Tipo: {typeNames}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Detalles
                </Button>
            </CardActions>
        </Card>
    );
}

export default PokemonDetail;
