/**
 * @class CustomResponse
 * Initiate a Class
 */
class CustomResponse {
    result;

    res;

    successStatus;

    status;

    message;

    appVersion;

    platformstatus;

    /**
     *
     */
    get getResponse() {
        return this.makeResponse();
    }

    /**
     *
     * @param {*} req
     * @param {*} res
     * @param {*} successStatus
     * @param {*} status
     * @param {*} message
     * @param {*} appVersion
     * @param {*} result
     * @param {*} platformstatus
     */
    setResponse(
        res,
        successStatus,
        status,
        message,
        appVersion,
        result,
        platformstatus = 200
    ) {
        this.result = result;
        this.res = res;
        this.successStatus = successStatus;
        this.status = status;
        this.message = message;
        this.appVersion = appVersion;
        this.platformstatus = platformstatus;
        this.makeResponse();
    }

    /**
     * making response format
     */
    makeResponse() {
        this.res.set('Access-Control-Allow-Origin', '*');
        this.res.statusMessage = this.message;
        this.res.status(this.status).send({
            status: this.successStatus,
            code: this.status,
            message: this.message,
            appVersion: this.appVersion,
            result: this.result
        });
    }
}

// exporting all functions
export default new CustomResponse();
