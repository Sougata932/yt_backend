class ApiResponse{
  constructor(statuscode, date, message="Success" ){
    this.statusCode=statusCode
    this.data=data
    this.message=message
    this.success = statuscode < 400
  }
}