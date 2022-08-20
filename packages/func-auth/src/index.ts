import express from 'express';
import { GoogleLogInData } from "@test/func-auth-contract/src";

const test = new GoogleLogInData('sd', 'sd');

const app = express();

export const auth: Express.Application = app;
