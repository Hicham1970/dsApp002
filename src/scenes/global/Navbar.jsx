/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  useTheme,
  Stack,
  IconButton,
  Typography,
  TextField,
  Grid,
  Paper,
  Avatar,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import { useState, useEffect, useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FollowTheSignsIcon from "@mui/icons-material/FollowTheSigns";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LogoutIcon from "@mui/icons-material/Logout";
import DS, { Ds } from "../../components/DS"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import DeblurIcon from "@mui/icons-material/Deblur";
import InputBase from "@mui/material/InputBase";
import { Link } from "react-router-dom";
import { signup, login } from "../../authentification.js"; // Import the functions
import { authentification } from "../../authentification.js";
import { auth, db } from '../../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCardIcon from '@mui/icons-material/AddCard';



const NavBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSigninModal, setOpenSigninModal] = useState(false);
  const [openAccountModal, setOpenAccountModal] = useState(false);
  const [openFaqModal, setOpenFaqModal] = useState(false);
  const [faqTitle, setFaqTitle] = useState("");
  const [faqContent, setFaqContent] = useState("");


  const stylePaper = {
    padding: "15px",
    height: "60vh",
    width: 400,
    margin: "20px auto"

  }
  const stylingAvatar = {
    backgroundColor: colors.greenAccent[600],
    color: colors.grey[100],
    margin: "35px auto",
  }

  const handleTitleChange = (event) => {
    setFaqTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setFaqContent(event.target.value);
  };

  const handleAccountSubmit = () => {
    console.log('Infos User ')
  }
  const handleFaqSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    if (!faqTitle || !faqContent) {
      alert("Veuillez remplir tous les champs.");
      return;
    }

    setLoading(true); // Indique que le chargement est en cours

    try {
      // Ajoute un document à la collection 'faq'
      await addDoc(collection(db, 'faq'), {
        title: faqTitle,
        content: faqContent,
      });

      alert("FAQ ajoutée avec succès !");
      setFaqTitle(''); // Réinitialise le champ titre
      setFaqContent(''); // Réinitialise le champ contenu
    } catch (error) {
      console.error("Erreur lors de l'ajout de la FAQ: ", error);
      alert("Erreur lors de l'ajout de la FAQ.");
    } finally {
      setLoading(false); // Indique que le chargement est terminé
      setOpenFaqModal(false); // Ferme le modal après l'ajout
    }
  };


  const handleOpenFaqModal = () => {
    setOpenFaqModal(true);
  };
  const handleCloseFaqModal = () => {
    setOpenFaqModal(false);
  };

  const handleOpenAccountModal = () => {
    setOpenAccountModal(true);
  };

  const handleCloseAccountModal = () => {
    setOpenAccountModal(false);
  };

  const handleOpenLoginModal = () => {
    setOpenLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setEmail(''); // Réinitialise le champ email
    setPassword(''); // Réinitialise le champ mot de passe
    setOpenLoginModal(false);
  };

  const handleOpenSigninModal = () => {
    setOpenSigninModal(true);
  };

  const handleCloseSigninModal = () => {
    setOpenSigninModal(false);
  };

  // Get Data from the Firebase:
  // db.collection('faq').get().then((querySnapshot) => { })
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Attempt to fetch data from the 'faq' collection
        const querySnapshot = await getDocs(collection(db, 'faq'));
        console.log(querySnapshot);
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
      } catch (error) {
        // Log a more descriptive error message
        console.error("Erreur lors de la récupération des données : Vérifiez les permissions de Firebase.", error);
      }
    };

    fetchData();
  }, []);


  // Listen for auth status changes: 
  // chaque fois que l'authentification change logged or not 
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log("User logged in:", user);
      //  redirect the user or update the UI
      // setOpenSigninModal(true);
      setLoading(false);
    } else {
      console.log("User logged out");
      //  redirect the user or update the UI
      // setOpenSigninModal(true);
      setLoading(false);
    }

  })



  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        console.log('User logged out successfully');
        //  redirect the user or update the UI
        // setOpenSigninModal(true);
        setLoading(false);

      })
      .catch((error) => {
        console.error('Error logging out:', error);
      });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login(email, password) // Call the login function
      .then(() => {
        setLoading(false);
        // Handle successful login (e.g., close modal, redirect)
        console.log('User logged in successfully');
        setOpenLoginModal(false);
        // Reset the form fields after successful login
        document.getElementById("login-form").reset();
      })
      .catch((error) => {
        setLoading(false);
        setError(error.message); // Set error message to display
      });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    signup(email, password) // Call the signup function
      .then(() => {
        setLoading(false);
        console.log("User signed up successfully :", email, password);
        // Handle successful signup (e.g., close modal, redirect)
        setOpenSigninModal(false);
        // Reset the form fields after successful signup
        document.getElementById("signup-form").reset();

      })
      .catch((error) => {
        setLoading(false);
        setError(error.message); // Set error message to display
      });
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/**Search Bar Left */}
      <Box
        display="flex"

        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      {/**Icons Right */}
      <Box display="flex" gap={2} sx={{ marginLeft: 'auto' }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton
          to="#"
          className="logged-out"
          onClick={handleOpenSigninModal}
        >
          <FollowTheSignsIcon />
        </IconButton>
        <IconButton
          to="#"
          className="logged-out"
          onClick={handleOpenLoginModal}
        >
          <ExitToAppIcon />
        </IconButton>
        <IconButton to="#" className="logged-in" onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
        <IconButton
          to="#"
          className="logged-in"
          onClick={handleOpenAccountModal}
        >
          <ManageAccountsIcon />
        </IconButton>

        <IconButton to="#" className="logged-in" onClick={handleOpenFaqModal}>
          <AddCardIcon />
        </IconButton>
        <Link to="/ds"> {/* Utilisez Link pour naviguer */}
          <IconButton>
            <DeblurIcon />
          </IconButton>
        </Link>
      </Box>
      {/* Modals */}
      <Box id="modal-login" className="modal">
        {/* Modal de connexion */}
        <Modal
          open={openLoginModal}
          onClose={handleCloseLoginModal}
          aria-labelledby="modal-title"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
          }}
        >
          <Grid>
            <Paper elevation={10} style={stylePaper}>
              <Grid align="center">
                <Avatar style={stylingAvatar}>
                  <LockOpenIcon />
                </Avatar>
                <Typography variant="h2" id="modal-title" margin="normal">
                  Login
                </Typography>
              </Grid>
              <form onSubmit={handleLoginSubmit} id="login-form">
                <Stack spacing={2} sx={{ width: "100%", marginTop: "80px" }}>
                  <TextField
                    type="email"
                    id="login-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    label="Email"
                    placeholder="Enter your email"
                    fullWidth
                    required
                    variant="standard"
                    sx={{ fontSize: "30px" }}
                  />
                  <TextField
                    type="password"
                    id="login-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    label="Password"
                    placeholder="Enter your password"
                    fullWidth
                    required
                    variant="standard"
                    sx={{ fontSize: "30px" }}
                  />
                  <FormControlLabel
                    control={<Checkbox name="remember-me" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                    sx={{
                      color: colors.grey[100],
                      backgroundColor: colors.blueAccent[700],
                      "&:disabled": {
                        backgroundColor: colors.blueAccent[900],
                        color: colors.grey[300],
                      },
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    {loading ? "Login..." : "Login"}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
        </Modal>
      </Box>
      {/* Fin du modal de connexion */}
      <Box id="modal-signup" className="modal">
        {/* Modal d'inscription */}
        <Box id="modal-signup" className="modal">
          <Modal
            open={openSigninModal}
            onClose={handleCloseSigninModal}
            aria-labelledby="modal-title"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
            }}
          >
            <Grid>
              <Paper elevation={10} style={stylePaper}>
                <Grid align="center">
                  <Avatar style={stylingAvatar}>
                    <FollowTheSignsIcon />
                  </Avatar>
                  <Typography variant="h2" id="modal-title" margin="normal">
                    Sign Up
                  </Typography>
                </Grid>
                <form onSubmit={handleSignupSubmit} id="signup-form">
                  <Stack spacing={2} sx={{ width: "100%", marginTop: "80px" }}>
                    <TextField
                      type="email"
                      id="signup-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={loading}
                      label="Email"
                      placeholder="Enter your email"
                      fullWidth
                      required
                      variant="standard"
                      sx={{ fontSize: "30px" }}
                    />
                    <TextField
                      type="password"
                      id="signup-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={loading}
                      label="Password"
                      placeholder="Enter your password"
                      fullWidth
                      required
                      variant="standard"
                      sx={{ fontSize: "30px" }}
                    />
                    <FormControlLabel
                      control={<Checkbox name="remember-me" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={loading}
                      sx={{
                        color: colors.grey[100],
                        backgroundColor: colors.blueAccent[700],
                        "&:disabled": {
                          backgroundColor: colors.blueAccent[900],
                          color: colors.grey[300],
                        },
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      {loading ? "Signing up..." : "Sign Up"}
                    </Button>
                  </Stack>
                </form>
              </Paper>
            </Grid>
          </Modal>
        </Box>
      </Box>
      {/* Fin Modal d'inscription */}
      <Box id="modal-account" className="modal">
        {/* Modal Compte */}
        <Modal
          open={openAccountModal}
          onClose={handleCloseAccountModal}
          aria-labelledby="modal-title"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
          }}
        >
          <Grid>
            <Paper elevation={10} style={stylePaper}>
              <Grid align="center">
                <Avatar style={stylingAvatar}>
                  <ManageAccountsIcon />
                </Avatar>
                <Typography variant="h2" id="modal-title" margin="normal">
                  Account
                </Typography>
              </Grid>
              <form onSubmit={handleAccountSubmit} id="Account-form">
                <Stack spacing={2} sx={{ width: "100%", marginTop: "80px" }}>
                  <TextField
                    type="text"
                    id="account"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={loading}
                    label="Email"

                    fullWidth

                    variant="standard"
                    sx={{ fontSize: "30px" }}
                  />
                  <TextField
                    type="text"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={loading}
                    label="Password"

                    fullWidth

                    variant="standard"
                    sx={{ fontSize: "30px" }}
                  />

                </Stack>
              </form>
            </Paper>
          </Grid>
        </Modal>
        {/* Fin Modal Compte */}
      </Box>
      {/* Debut Modal FAQ */}
      <Box id="modal-faq" className="modal">
        <Modal
          open={openFaqModal}
          onClose={handleCloseFaqModal}
          aria-labelledby="modal-title"
        >
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: colors.grey[700],
              boxShadow: 24,
              borderRadius: "10px",
              p: 4,
              width: "500px",
              height: "400px",
            }}
          >
            <Typography variant="h3" id="modal-title" margin="normal">
              FAQ
            </Typography>
            <form onSubmit={handleFaqSubmit} id="faq-form">
              <Stack spacing={2} sx={{ width: "300px" }}>
                <TextField
                  type="text"
                  id="faq-title"
                  label="Title"
                  placeholder="Faq title"
                  variant="outlined"
                  onChange={handleTitleChange}
                  value={faqTitle}
                  disabled={false}
                  required
                  sx={{ fontSize: "30px" }}
                  InputProps={{ readOnly: false }}
                />
                <TextField
                  id="faq-content"
                  placeholder="Content"
                  label="Contente"
                  variant="outlined"
                  onChange={handleContentChange}
                  value={faqContent}
                  disabled={false}
                  required
                  multiline // This makes the TextField behave like a textarea
                  rows={4} // You can adjust the number of visible rows
                  sx={{ fontSize: "30px" }}
                  InputProps={{ readOnly: false }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                  onClick={handleFaqSubmit}

                  sx={{
                    color: colors.grey[100],
                    backgroundColor: colors.blueAccent[700],
                    "&:disabled": {
                      backgroundColor: colors.blueAccent[900],
                      color: colors.grey[300],
                    },
                    display: 'flex', // Align icon and text
                    alignItems: 'center', // Center vertically
                  }}
                >

                  {loading ? "Send To DB..." : "Send To DB"}
                </Button>

                {error && (
                  <Box
                    sx={{
                      color: colors.redAccent[500],
                      textAlign: "center",
                      marginTop: 1,
                    }}
                  >
                    {error}
                  </Box>
                )}
              </Stack>
            </form>
          </Box>
        </Modal>
      </Box>
    </Box >
  );
};

export default NavBar;
