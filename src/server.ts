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

app.get('/events',(req:Request, res:Response) =>{
    res.json(events);
})

app.get("/events",(req, res)=>{
    if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = events.filter((event) => event.category === category);
    res.json(filteredEvents);
    }else{
        res.json(events);
    }
})

app.listen (port,() =>{
    console.log(`App listen at http://localhost:${port}`);
})

//////////////// Type Object //////////////////////////////
interface Event{
    id: number;
    category: string;
    title: string;
    description: string;
    location: string;
    date: string;
    time: string; 
    petAlowed: boolean; 
    organizer: string;
}

const events: Event[] = [
    {
        id:1,
        category: 'Music',
        title: 'Concert',
        description: 'Live concert by famous band',
        location: 'Central Park',
        date: '2023-10-01',
        time: '18:00',
        petAlowed: true,
        organizer: 'John Doe'
    },
    {
        id: 2,
        category: 'Art',
        title: 'Art Exhibition',
        description: 'Modern art exhibition by local artists',
        location: 'Art Gallery',
        date: '2023-11-15',
        time: '10:00',
        petAlowed: false,
        organizer: 'Jane Smith'
    },
    {
        id: 3,
        category: 'Technology',
        title: 'Tech Conference',
        description: 'Annual technology conference with keynote speakers',
        location: 'Convention Center',
        date: '2023-12-05',
        time: '09:00',
        petAlowed: false,
        organizer: 'Tech Corp'
    },
    {
        id: 4,
        category: 'Food',
        title: 'Food Festival',
        description: 'Taste dishes from around the world',
        location: 'Downtown Plaza',
        date: '2024-01-20',
        time: '12:00',
        petAlowed: true,
        organizer: 'City Council'
    },
    {
        id: 5,
        category: 'Sports',
        title: 'Marathon',
        description: 'Annual city marathon for all ages',
        location: 'City Park',
        date: '2024-03-10',
        time: '07:00',
        petAlowed: false,
        organizer: 'Sports Association'
    },
    {
        id: 6,
        category: 'Education',
        title: 'Science Fair',
        description: 'Interactive science fair for students and families',
        location: 'Community Center',
        date: '2024-04-15',
        time: '10:00',
        petAlowed: true,
        organizer: 'Local Schools'
    }
]