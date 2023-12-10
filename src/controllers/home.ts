import { Request, Response } from 'express'

export class HomeController {
	async handle(req: Request, res: Response) {
		//return res.json('Tudo ceto! A aplicação está funcionando perfeitamente.')
		return res.json('Mensagem de confirmacao de um novo deploy.')
	}
}