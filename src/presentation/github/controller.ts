import { Request, Response } from "express";

export class GithubController{

    constructor(){

    }

    webhookHandler = ( req: Request, res: Response ) => {
        
        const body = req.body;

        console.log(body);

        res.status(202).send('Accept');
    }
}