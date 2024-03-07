import express from 'express';
import { envs } from './config';

(()=> {
    main();
})();

function main(){

    const app = express();

    app.use('/api/github', (req, res) => {
        res.json('Github endpoint')
    });

    app.listen( envs.PORT, () => {
        console.log(`App running on port ${ envs.PORT }`);
    })
}