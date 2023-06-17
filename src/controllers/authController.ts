import { Request, Response } from 'express';

const signup = async (req: Request, res: Response) => {
    //create user
    //create jwt token
    //return 201 and token
};

const login = async (req: Request, res: Response) => {
    //verify passwords
    //create jwt token
};


export default {
    signup,
    login
}