class InvalidError extends Error {
    constructor(message) {
        super(message);
        this.status  = 400;                    // statusCode
        this.err     = this.constructor.name;  // instance name 가져오기
        this.msg     = {msg: message};         // error message를 parameter로 받아온다
    }
}

module.exports = InvalidError