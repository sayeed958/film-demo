import * as httpStatus from 'http-status';
import * as expressValidation from 'express-validation';
import constants from '../../config/constants';
import customResponse from '../utils/response';

const { miscMessage, version } = constants;

class CustomError {
	converter = (err: any, req: any, res: any, next): any => {
		if (err instanceof expressValidation.ValidationError) {
			return customResponse.setResponse(
				res,
				false,
				err.status,
				err.errors[0]['messages'][0] || miscMessage.VALIDATION_ERROR,
				version.v1,
				err.errors
			);
		}
		return next();
	};

	notFound = (req: any, res: any): any => customResponse.setResponse(
		res,
		false,
		httpStatus.NOT_FOUND,
		miscMessage.NOT_FOUND,
		version.v1,
		{}
	);
}

export default new CustomError();
