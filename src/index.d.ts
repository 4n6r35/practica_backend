export {};

declare global{
    declare namespace Express {
		interface Request {
            user: {
                id_user: bigint
                name: string
                cargo: string
                email: string
                password: text
                status:boolean
            }
		}
	}
}