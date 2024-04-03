const db = require('../database/models');


 const userController = {
  allUsers: (req, res) => {
    db.Usuario.findAll()
      .then(usuarios => {
        res.status(200).json({
          status: 200,
          totalUsuarios:usuarios.length,
          usuarios:usuarios,
        })
    
      })
      
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  },
  usersByID: (req,res) =>{
    db.Usuario.findByPk(req.params.id)
      .then(usuario => {
        res.status(200).json({
          status: 200,
          usuario:usuario
        })
    
      })
      
      .catch(error => {
        res.status(500).json({ message: error.message });
      });
  }
}


module.exports = userController