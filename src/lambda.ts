import serverlessExpress from '@codegenie/serverless-express';
import { app } from './server';

export const lambdaHandler = serverlessExpress({ app });
