import jwt from 'jsonwebtoken';

export const fetchUser = (req, res, next) => {
    // Get the token from the header
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).send({ error: 'Please authenticate using a valid token' });
    }

    try {
        // Verify the token
        const data = jwt.verify(token, process.env.JWT_SECRET);
        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate using a valid token' });
    }
};