import { NextFunction, Request, Response } from "express";
import { BaseController } from "../common/base_controller";
import { HTTPError } from "../errors/http-error.class";
import { LoggerService } from "../logger/logger_service";

export class UserController extends BaseController {
	
	constructor(
		logger: LoggerService
	) {
		super(logger)
		this.bindRoutes([
			{ path: '/register', method: 'post', func: this.register },
			{ path: '/login', method: 'post', func: this.login },
		])
	}

	login(req: Request, res: Response, next: NextFunction) {
		// this.ok(res, 'login')
		next(new HTTPError(401, 'Ошибка авторизации', 'login'))
	}

	register(req: Request, res: Response, next: NextFunction) {
		this.ok(res, 'register')
	}

}