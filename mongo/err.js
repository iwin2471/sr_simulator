module.exports = (Users, rndString)=>{
  Users.pre('save', (error, res, next)=>{
    this.token = this.generateToken();
  })
  .post('save', (error, res, next)=>{
    if (error.name === 'MongoError' && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  })
  .post('update', (error, res, next)=>{
    if (error.name === 'MongoError' && error.code === 11000) next(new user_duplicate("duplicate error"));
    else if(error.name === "ValidationError") next(new ValidationError(error.message));
    else next(error);
  });

  Users.method('generateToken', ()=>{
    return rndString.generate();
  });
}
