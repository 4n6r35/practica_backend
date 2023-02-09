export {};

declare global{

    declare namespace NodeJS {

        interface ProcessEnv{
            
            DB_DIALECT: string;
            DB_USER: string;
            DB_PASS: string;
            DB_HOST: string;
            DB_PORT: number;
            DB_NAME: string;
            REST_PORT:number;
            SECRETKEYTOKEN: string;

        }
    }
}