import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import {
  Alert,
  Avatar,
  AvatarGroup,
  Badge,
  Box,
  ButtonGroup,
  Checkbox,
  Chip,
  CircularProgress,
  Collapse,
  Divider,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  LinearProgress,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Skeleton,
  Slider,
  Stack,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import {
  CheckCircleOutline,
  ExpandLess,
  ExpandMore,
  FavoriteBorder,
  StarBorder,
  VolumeDown,
  VolumeUp,
} from "@mui/icons-material";
import { deepOrange, deepPurple } from "@mui/material/colors";
import MailIcon from "@mui/icons-material/Mail";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];
function App() {
  return (
    <>
      <h1>Text Button</h1>
      <Button color="secondary">Click Me</Button>
      <Button color="primary" href="https://e-tutor-wine.vercel.app/">
        Primary
      </Button>
      <Button disabled>Do Not Click Me</Button>
      <h1>Contained Button</h1>
      <Button variant="contained">Click Me</Button>
      <Button variant="contained" color="secondary">
        Click Me
      </Button>
      <Button variant="contained" color="secondary" disabled>
        Click Me
      </Button>
      <h1>Outlined Button</h1>
      <Button
        variant="outlined"
        color="primary"
        href="https://e-tutor-wine.vercel.app/"
      >
        Click Me
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        href="https://e-tutor-wine.vercel.app/"
      >
        Click Me
      </Button>
      <Button
        variant="outlined"
        color="error"
        href="https://e-tutor-wine.vercel.app/"
      >
        Click Me
      </Button>
      <Button
        variant="outlined"
        disabled
        href="https://e-tutor-wine.vercel.app/"
      >
        Click Me
      </Button>
      <h1>Button size</h1>
      <Button variant="contained" size="small">
        Small
      </Button>
      <Button variant="contained" size="medium">
        Medium
      </Button>
      <Button variant="contained" size="large">
        Large
      </Button>
      <h1>Button with Icon</h1>
      <Button variant="contained" color="secondary" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <h1>Icon Button</h1>
      <IconButton aria-label="delete" size="large">
        <DeleteIcon fontSize="inherit" color="secondary" />
      </IconButton>
      <h1>Custom Button</h1>
      <Button variant="contained" style={{ backgroundColor: "green" }}>
        Custom 1
      </Button>
      <Button variant="contained" sx={{ backgroundColor: "red" }}>
        Custom 2
      </Button>
      <h1>Button with Click Event</h1>
      <Button
        variant="contained"
        onClick={() => alert("Hello")}
        style={{ backgroundColor: "green" }}
      >
        Click Me
      </Button>
      <h1>Button Group</h1>
      <ButtonGroup variant="contained">
        <Button color="primary">One</Button>
        <Button color="secondary">One</Button>
        <Button color="error">One</Button>
      </ButtonGroup>
      <h1>Vertical Button Group</h1>
      <ButtonGroup variant="contained" orientation="vertical">
        <Button color="primary">One</Button>
        <Button color="secondary">One</Button>
        <Button color="error">One</Button>
      </ButtonGroup>
      <h1>FAB Button</h1>
      <Fab color="primary" aria-label="add">
        R
      </Fab>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
      <h1>Check Boxes</h1>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked indeterminate />
      <Checkbox checked color="success" />
      <Checkbox disabled checked />
      <Checkbox
        icon={<FavoriteBorder />}
        color="error"
        checkedIcon={<FavoriteIcon />}
      />
      <Checkbox onChange={() => console.log("Checked done")} color="success" />
      <FormControlLabel
        label="I accept terms and conditions"
        control={<Checkbox />}
      />
      <FormControlLabel
        labelPlacement="start"
        label="I accept terms and conditions"
        control={<Checkbox />}
      />
      <h1>Radio Button</h1>
      <Radio
        value="male"
        name="radio-buttons"
        slotProps={{ input: { "aria-label": "A" } }}
      />
      <Radio
        value="female"
        name="radio-buttons"
        slotProps={{ input: { "aria-label": "B" } }}
      />
      <FormControlLabel label="Male" control={<Radio />} />
      <FormControlLabel
        labelPlacement="start"
        label="Female"
        control={<Radio />}
      />
      <FormControl>
        <FormLabel>Variants</FormLabel>
        <RadioGroup row defaultValue="outlined" name="radio-buttons-group">
          <Radio value="outlined" label="Outlined" variant="outlined" />
          <Radio value="soft" label="Soft" variant="soft" />
          <Radio value="solid" label="Solid" variant="solid" />
          <Radio value="plain" label="Plain" variant="plain" />
        </RadioGroup>
      </FormControl>
      <h1>Rating</h1>
      <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
      <Rating
        name="half-rating-read"
        defaultValue={2.5}
        precision={0.5}
        readOnly
      />
      <Stack spacing={2} direction="row" sx={{ alignItems: "center", mb: 1 }}>
        <VolumeDown />
        <Slider aria-label="Volume" />
        <VolumeUp />
      </Stack>
      <Slider defaultValue={30} aria-label="Disabled slider" />
      <Box sx={{ height: 100, width: 4 }}>
        <Slider defaultValue={50} color="secondary" orientation="vertical" />
      </Box>
      <h1>Switch</h1>
      <Switch defaultChecked />
      <Switch defaultChecked disabled />
      <Switch defaultChecked color="success" />
      <FormControlLabel label="Dark Mode" control={<Switch />} />
      <h1>Text field</h1>
      <TextField />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <h1>Stack</h1>
      <Stack
        spacing={{ xs: 1, sm: 2 }}
        direction="row"
        useFlexGap
        sx={{ flexWrap: "wrap" }}
      >
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Long content</ListItem>
      </Stack>
      <h1>System key props</h1>
      <h2>Alignment</h2>
      <Box textAlign="left">Hello</Box>
      <Box textAlign="center">Hello</Box>
      <Box textAlign="right">Hello</Box>
      <h2>Font-weight</h2>
      <Box textAlign="left" fontWeight={800} fontSize={20} fontStyle={"italic"}>
        Hello
      </Box>
      <h1>Color</h1>
      <Box bgcolor="primary.main" color="primary.contrastText">
        Primary
      </Box>
      <h1>Margin</h1>
      <Box m={2}>Hello</Box>
      <Box mt={3} ml={2}>
        Hello 2
      </Box>
      <h1>Sizing</h1>
      <Box width={1 / 4} bgcolor="red">
        1/4
      </Box>
      <Box width="50%" bgcolor="green">
        50%
      </Box>
      <h1>Border</h1>
      <Stack gap={2}>
        <Box border={1} borderColor="error.main">
          Hello
        </Box>
        <Box border={1} borderColor="primary.main">
          Hello
        </Box>
        <Box border={1} borderColor="primary.main" borderTop={0}>
          Hello
        </Box>
      </Stack>
      <h1>Border Radius</h1>
      <Box
        border={1}
        borderColor="primary.main"
        borderRadius="50%"
        height={300}
        width={300}
        ml={2}
      >
        Hello
      </Box>
      <h1>Avatars</h1>
      <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
      <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <h1>Badges</h1>
      <Badge color="secondary" badgeContent={99}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={100}>
        <MailIcon />
      </Badge>
      <Badge color="secondary" badgeContent={1000} max={999}>
        <MailIcon />
      </Badge>
      <h1>Chip</h1>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" />
        <Chip label="success" color="success" />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack>
      <h1>Divider</h1>
      <Divider />
      <Divider orientation="vertical" />
      <Divider>CENTER</Divider>
      <h1>List</h1>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Sent mail" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <h1>Table</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <h1>Tooltip</h1>
      <Tooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <h1>Typography</h1>
      <div>
        <Typography variant="h1" gutterBottom>
          h1. Heading
        </Typography>
        <Typography variant="h2" gutterBottom>
          h2. Heading
        </Typography>
        <Typography variant="h3" gutterBottom>
          h3. Heading
        </Typography>
        <Typography variant="h4" gutterBottom>
          h4. Heading
        </Typography>
        <Typography variant="h5" gutterBottom>
          h5. Heading
        </Typography>
        <Typography variant="h6" gutterBottom>
          h6. Heading
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti veritatis natus.
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
          subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti veritatis natus.
        </Typography>
        <Typography variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti veritatis natus.
        </Typography>
        <Typography variant="body2" gutterBottom>
          body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti veritatis natus.
        </Typography>
      </div>
      <h1>alert</h1>
      <Alert
        icon={<CheckCircleOutline fontSize="inherit" />}
        severity="success"
      >
        Here is a gentle confirmation that your action was successful.
      </Alert>
      <Alert variant="filled" severity="success">
        This is a filled success Alert.
      </Alert>
      <Alert variant="filled" severity="info">
        This is a filled info Alert.
      </Alert>
      <Alert variant="filled" severity="warning">
        This is a filled warning Alert.
      </Alert>
      <Alert variant="filled" severity="error">
        This is a filled error Alert.
      </Alert>
      <h1>Progress</h1>
      <LinearProgress variant="buffer" value={50} valueBuffer={10} />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />

      <h1>skeleton</h1>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />

      <h1>nav-bar</h1>
      {/* <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              MUI
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box> */}
      <Button variant="contained" color="success" href="/grid">
        Go to Grid
      </Button>
    </>
  );
}

export default App;
