import { v4 as uuidv4 } from 'uuid';
     import { format } from 'date-fns';

     let posts = [
       {
         id: uuidv4(),
         title: 'First Post',
         content: 'This is my first  post.',
         createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
       },
       {
         id: uuidv4(),
         title: 'Second Post',
         content: 'This is my second  post.',
         createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
       },
     ];

     export default function handler(req, res) {
       if (req.method === 'GET') {
         res.status(200).json(posts);
       } else if (req.method === 'POST') {
         const { title, content } = req.body;
         const newPost = {
           id: uuidv4(),
           title,
           content,
           createdAt: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
         };
         posts.push(newPost);
         res.status(201).json(newPost);
       }
     }