import express, {Application, Request, Response} from "express" ;

const PORT = process.env.PORT || 2900;

const app: Application = express();

app.use((req, _res, next) => {  
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});

app.get("/ping", async (_req : Request, res: Response) => {
    res.json({
    message: "Greetings from Kevin Staunton" 
    });
});

app.get('/bananas', async (_req : Request, res: Response) => {
    res.json({
    message: "this is bananas",
    });
});

app.get('/sneed', async (_req : Request, res: Response) => {
    res.json({
    message: "Sneed's Feed & Seed, Formerly Chuck's",
    });
});


app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
    });