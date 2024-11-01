class ApiResponse {
    constructor(statusCode, success, data, message = 'success') {
        this.success = success;
        this.message = message;
        this.data = data;
        this.statusCode = statusCode < 400;
    }
}

export { ApiResponse };
