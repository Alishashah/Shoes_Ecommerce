const jwt = require("jsonwebtoken");
const Admin = require("../models/adminmodel");

const adminverifyjwt = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer", "").trim();

        if (!token) {
            return res.status(401).json({
                message: "Unauthorized user"
            });
        }

        const decodedToken = jwt.verify(token, process.env.GENERATE_TOKEN);
        const adminData = await Admin.findById(decodedToken?._id).select("-password");

        if (!adminData) {
            return res.status(404).json({
                message: "Admin not found"
            });
        }

        req.admin = adminData;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(401).json({
            message: "Invalid token"
        });
    }
};

module.exports = adminverifyjwt;