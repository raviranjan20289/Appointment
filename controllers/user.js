
const User = require("../models/userInfo")
const getAppointmentForm = async(req, res)=>{
  try{
         res.status(200).render('userForm');
  }catch(error) {
    console.log(error);
  }
    
}



const postAppointmentForm = async(req, res) =>{
  try{


   let info= {
  
    Name: req.body.firstname,
    Email: req.body.email
   }


   const data = await User.create(info);
      
        res.status(200).send(data);
      }catch (error) {
    console.log(error);
  }

};


const getAllUsers = async(req, res)=>{
  
  try{
    let users = await User.findAll({
    // attributes: [
    //   'id',
    //   'name'
    // ]
  });
  res.status(200).send(users);
}catch(error){
  console.log(error);
}
};


const deleteUser = async(req, res)=>{
  try{
  let id = req.params.id;

  await User.destroy({where: {id : id}});
  res.status(200).send('product is delete');
  }catch(error){
    console.log(error);
  }
  
}

module.exports = {getAppointmentForm,postAppointmentForm, getAllUsers, deleteUser};