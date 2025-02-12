import { useState } from "react";
import { ThemeProvider } from "@emotion/react";
import {
  Avatar,
  Box,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  createTheme,
  Grid,
  Grid2,
  IconButton,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import Card from "@mui/material/Card";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   ...theme.applyStyles("dark", {
//     backgroundColor: "#1A2027",
//   }),
// }));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  variants: [
    {
      props: ({ expand }) => !expand,
      style: {
        transform: "rotate(0deg)",
      },
    },
    {
      props: ({ expand }) => !!expand,
      style: {
        transform: "rotate(180deg)",
      },
    },
  ],
}));

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

function GridApp() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Typography variant="h2">Grid2</Typography>
      <Grid2 container spacing={2}>
        <Grid2 item md={12} lg={3}>
          <Box
            sx={{ bgcolor: "primary.main", height: "200px", width: "200px" }}
          >
            1
          </Box>
        </Grid2>
        <Grid2 item md={12} lg={3}>
          <Box sx={{ bgcolor: "red", height: "200px", width: "200px" }}>2</Box>
        </Grid2>
        <Grid2 item md={12} lg={3}>
          <Box sx={{ bgcolor: "green", height: "200px", width: "200px" }}>
            3
          </Box>
        </Grid2>
        <Grid2 item md={12} lg={3}>
          <Box sx={{ bgcolor: "blue", height: "200px", width: "200px" }}>4</Box>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid2>
      </Grid2>
      <Grid container spacing={2}>
        {[lightTheme, darkTheme].map((theme, index) => (
          <Grid item xs={6} key={index}>
            <ThemeProvider theme={theme}>
              <Box
                sx={{
                  p: 2,
                  borderRadius: 2,
                  bgcolor: "background.default",
                  display: "grid",
                  gridTemplateColumns: { md: "1fr 1fr" },
                  gap: 2,
                }}
              >
                {[0, 1, 2, 3, 4, 6, 8, 12, 16, 24].map((elevation) => (
                  <Item key={elevation} elevation={elevation}>
                    {`elevation=${elevation}`}
                  </Item>
                ))}
              </Box>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>
            <Typography sx={{ marginBottom: 2 }}>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <ThemeProvider>
        
      </ThemeProvider>
    </>
  );
}

export default GridApp;
