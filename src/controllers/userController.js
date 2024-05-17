import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'node:crypto';
const path = require('node:path');
const fs = require('node:fs');

const databasePath = path.resolve(__dirname, 'userDB.json');
const secret = 'your_secret_key'; // Replace with your actual secret key


const readDatabase = async () => {
    try {
        const data = await fs.readFile(databasePath, 'utf8');
    return JSON.parse(data);
    } catch (err) {
        console.error('Error reading database:', err);
        throw err;
    }
        };

const writeDatabase = async (database) => {
    try {
        await fs.writeFile(databasePath, JSON.stringify(database, null, 2));
    } catch (err) {
        console.error('Error writing database:', err);
        throw err;
    }
};

export const registerUser = async (userData) => {
    try {
        const database = readDatabase();
        // Check if the user already exists
        const userExists = database.users.some(
            (user) => user.email === userData.email || user.username === userData.username
        );

        if (userExists) {
            return { error: 'User already exists' };
        }
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(userData.password, salt);

        // Create a new user object
        const newUser = {
            id: crypto.randomUUID(), // Generate a unique ID for the user
            username: userData.username,
            email: userData.email,
            phone: userData.phone,
            password: hashedPassword,
        };

        // Add the new user to the database
        database.users.push(newUser);

        writeDatabase(database);
        return { success: true };
    } catch (err) {
        console.error('Error registering user:', err);
        return { error: 'Failed to register user' };
    }
};
export const loginUser = async (userData) => {
    try {
        const database = readDatabase();

        // Check if the user exists
        const user = database.users.find((user) => user.email === userData.email);
        if (!user) {
            return { error: 'User does not exist' };
        }

        // Check if the password is correct
        const isPasswordValid = await bcrypt.compare(userData.password, user.password);

        if (!isPasswordValid) {
            return { error: 'Incorrect password' };
    }

        // Generate a JWT token
        const token = jwt.sign({ id: user.id }, secret, { expiresIn: '1h' });

        return { success: true, token };
    } catch (err) {
        console.error('Error logging in user:', err);
        return { error: 'Failed to login user' };
    }
};

export const getUsers = () => {
    try {
        const database = readDatabase();
        return { users: database.users };
    } catch (err) {
        console.error('Error getting users:', err);
        return { error: 'Failed to get users' };
    }
};

export const getUserById = (id) => {
    try {
        const database = readDatabase();
        const user = database.users.find((user) => user.id === id);
        if (!user) {
            return { error: 'User not found' };
        }
        return { user };
    } catch (err) {
        console.error('Error getting user by ID:', err);
        return { error: 'Failed to get user by ID' };
    }
};

