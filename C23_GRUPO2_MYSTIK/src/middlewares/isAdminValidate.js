const isAdminValidate = (req, res, next) => {
    if (req.session.user.roles_id === 1) {
        next();
    } else {
        res.status(403).send('Acceso denegado. Debes ser administrador para acceder a esta ruta');
    }
};

module.exports = isAdminValidate;
