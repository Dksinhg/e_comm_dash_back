const User = require('../database/user')
const jwt = require('jsonwebtoken')

const auth = async (req, resp, next) =>{
  try {

    req.user = null;

    const token = req.headers=['token']
    if (token) {
      const  verifyUser = jwt.verify(token, process.env.JWT_SCERET);
      if(verifyUser){
        const user = await User.findOne({_id: verifyUser.id})
        if (user) {
          req.user = user;
          req.token = token;
        }
      }
    }
    
  } catch (error) {
    req.user = null;
    console.log(error)
  }
  next()
}