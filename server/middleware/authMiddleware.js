import jwt from "jsonwebtoken";
import User from "../models/user.js";


const protect = async (req, res, next) => {

    let token;

    token = req.cookies.jwt

    if(token) {

        try {
            
            const decoded = jwt.verify(token, process.JWT_SECRET)
            req.user = await User.findById(decoded.userId).select('-password')

            next()

        } catch (error) {
            console.log(error);
            res.status(401)
        }
    } else {

        res.status(401);
    }
}

export { protect }

// validate user role
export const authorizeRoles = (...roles) => {
    
    return (req, res, next) => {
        if(!roles.includes(req.user.role)) {
            return next(new Error(`Role ${req.user.role} is not allowed to access`));
        }
        next()
    }
}