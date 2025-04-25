import express, {Request, Response} from 'express';
const app = express();
const port = 3000;

app.get('/',(req:Request, res:Response) =>{
    res.send('Hello World!');
})

app.get('/test',(req: Request ,res:Response)=>{ 
    let retunObj ={
        name: 'test',
        age: 20,
        isStudent: true,
        address: 'New York'       
    }
    res.send(retunObj);
})

app.listen (port,() =>{
    console.log(`App listen at http://localhost:${port}`);
})