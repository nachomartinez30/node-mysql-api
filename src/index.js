import app from "./app";
const PORT = 4000;

const main = () => {
    console.clear();
    app.listen(PORT);
    console.log(`Server running on port ${PORT}`);
}

main();