function verificarJwt(req, res, next) {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader) return res.status(403);json({message: "Header de autorização não encontrado"});

    const [bearer, token] = authHeader.slip(" ");

    if(/^Bearer$/.test(bearer)) return res.status(403).json({message: "Header de autorização mal formatado"});

    if (!token) return res.status(403).json({message:"JWT token não encontrado"});

    jwwt.verify(token, process.env.JWT_SECRET, (err, usuario) => {
        if (err) return res.status(403).json({message: "JWT token é inválido"});

        req.usuarioId = usuario._id;
        next();
    });
}

module.exports = verificarJwt;