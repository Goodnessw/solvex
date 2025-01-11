import axios from 'axios';

const API_BASE = 'http://localhost/solvex/backend'; // Your API base URL

// Register a new user
export const registerUser = async (username, email, password) => {
    try {
        const response = await axios.post(`${API_BASE}/register`, { username, email, password });
        return response.data;
    } catch (error) {
        console.error('Register Error:', error.response?.data || error.message);
        return { success: false, error: error.response?.data || error.message };
    }
};

// Login an existing user
export const loginUser = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASE}/login`, { email, password });
        return response.data;
    } catch (error) {
        console.error('Login Error:', error.response?.data || error.message);
        return { success: false, error: error.response?.data || error.message };
    }
};

// Logout the user
export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_BASE}/logout`);
        return response.data;
    } catch (error) {
        console.error('Logout Error:', error.response?.data || error.message);
        return { success: false, error: error.response?.data || error.message };
    }
};

// Check authentication status
export const authCheck = async () => {
    try {
        const response = await axios.get(`${API_BASE}/auth-check`, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Auth Check Error:', error.response?.data || error.message);
        return { authenticated: false };
    }
};

// Fetch tasks for a user
export const fetchTasks = async (userId) => {
    try {
        const response = await axios.get(`${API_BASE}/tasks?user_id=${userId}`);
        return response.data;
    } catch (error) {
        console.error('Fetch Tasks Error:', error.response?.data || error.message);
        return [];
    }
};

// Fetch user data (based on session)
export const getUserData = async () => {
    try {
        // Using axios to send request to the API endpoint
        const response = await axios.get(`${API_BASE}/user-details`, {
            withCredentials: true, // Ensure session cookies are sent
        });

        // Return the user data from the API response
        return response.data; // Should return { username, email }
    } catch (error) {
        console.error('Error fetching user data:', error.response?.data || error.message);
        return { error: error.response?.data || error.message };
    }
};
