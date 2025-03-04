import { Button, TextField, Stack, Box } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useTheme } from "@mui/material/styles";
import { tokens } from "../theme";
import { useState } from "react";
import { auth } from "../firebase";

const Login = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      // Success handling
      const user = userCredential.user;
      console.log("Login successful:", user.email);

      // Clear form
      setEmail("");
      setPassword("");

      // Optional: Redirect or show success message
      // navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);

      // More specific error handling
      switch (error.code) {
        case "auth/invalid-credential":
          setError("Invalid email or password. Please try again.");
          break;
        case "auth/user-disabled":
          setError("This account has been disabled. Please contact support.");
          break;
        case "auth/too-many-requests":
          setError("Account temporarily locked. Please try again later.");
          break;
        case "auth/network-request-failed":
          setError(
            "Network error. Please check your connection and try again."
          );
          break;
        default:
          setError(`Authentication failed: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
    >
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} sx={{ width: "300px" }}>
            <TextField
              type="email"
              placeholder="Enter your Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              disabled={loading}
              required
              sx={{ fontSize: "30px" }}
            />
            <TextField
              type="password"
              placeholder="Enter your Password"
              variant="outlined"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              disabled={loading}
              required
              sx={{ fontSize: "30px" }}
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
              }}
            >
              {loading ? "Signing in..." : "Login"}
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
      </div>
    </Box>
  );
};
export default Login;
