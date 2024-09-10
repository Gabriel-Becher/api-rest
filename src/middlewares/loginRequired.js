import jwt from "jsonwebtoken";

import User from "../models/Usuario";

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({
      errors: ["Login required"],
    });
  }

  const [, token] = authorization.split(" ");
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = data;
    req.userId = id;
    req.userEmail = email;
    const user = await User.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({
        errors: ["Usuário inválido"],
      });
    }

    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ["Token expirado ou inválido"],
    });
  }
};
