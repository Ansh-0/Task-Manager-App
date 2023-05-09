const isFound = (req, res) => {
    res.status(404).send("The route you are looking for does not exist");
}

module.exports = isFound;