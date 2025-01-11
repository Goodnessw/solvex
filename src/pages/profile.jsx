import  { useEffect, useState } from 'react';
import { Typography, Button, Container, Paper, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { getUserData } from '../apis/api.js'; // Import the API function

// eslint-disable-next-line react/prop-types
const ProfilePage = ({ onLogout }) => {
    const [userData, setUserData] = useState(null); // Store user data
    const [loading, setLoading] = useState(true); // Handle loading state
    const [error, setError] = useState(null); // Handle error state
    const navigate = useNavigate();

    // Fetch user data when the component mounts
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getUserData(); // Fetch user data from the API
                if (data.error) {
                    setError(data.error); // Handle error
                } else {
                    setUserData(data); // Set user data
                }
            // eslint-disable-next-line no-unused-vars
            } catch (error) {
                setError('Error fetching user data'); // Handle unexpected errors
            } finally {
                setLoading(false); // Set loading to false after data fetching is complete
            }
        };

        fetchUserData(); // Call the function to fetch user data
    }, []); // Empty dependency array to run once when the component mounts

    const handleLogout = () => {
        onLogout(); // Call logout function
        navigate('/login'); // Redirect to login page after logout
    };

    if (loading) {
        return (
            <Container className="flex flex-col items-center justify-center min-h-screen">
                <CircularProgress />
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="flex flex-col items-center justify-center min-h-screen">
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Container>
        );
    }

    return (
        <Container className="flex flex-col items-center justify-center min-h-screen">
            <Paper className="p-8 max-w-md w-full shadow-lg">
                <Typography variant="h4" gutterBottom>
                    Welcome to Your Profile
                </Typography>
                <Typography variant="body1" paragraph>
                    Here you can view and manage your account information. We are glad to have you as part of our community. If you need any assistance, feel free to reach out.
                </Typography>
                <Typography variant="body2" className="text-gray-600 mb-4">
                    Username: <strong>{userData?.username}</strong> <br />
                    Email: <strong>{userData?.email}</strong>
                </Typography>
                <Button 
                    variant="contained" 
                    color="secondary" 
                    onClick={handleLogout}
                    fullWidth
                >
                    Logout
                </Button>
            </Paper>
        </Container>
    );
};

export default ProfilePage;
