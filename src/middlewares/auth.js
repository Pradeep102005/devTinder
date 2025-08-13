const adminAuth = (req, res, next) => {
    console.log("admin is getting checked");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if (!isAdminAuthorized) {
        return res.status(401).send("Unauthorized request");
    }
    next();
};

const UserAuth = (req, res, next) => {
    console.log("user is getting checked");
    const token = "xayz";
    const isUserAuthorized = token === "xyz";
    if (!isUserAuthorized) {
        return res.status(401).send("Unauthorized request");
    }
    next();
};

module.exports = { adminAuth, UserAuth };
