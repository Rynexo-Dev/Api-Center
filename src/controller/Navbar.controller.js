import { root } from "../service/Navbar.service.js";

export const handleApi = (req, res) => {
    res.type("text/css");
    res.send(root);
};