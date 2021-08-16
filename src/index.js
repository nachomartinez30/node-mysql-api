import app from "./app";
import { db } from '../database/database'
const PORT = 4000;

const main = async () => {
    try {
        console.clear();
        await db.sync();
        console.log(`Database connected successfully!`);
        app.listen(PORT);
        console.log(`Server running on port ${PORT}`);
    } catch (error) {
        console.error(error);
    }
}

main();