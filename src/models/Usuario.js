import Sequelize, { Model } from "sequelize";

import bcryptjs from "bcryptjs";

export default class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: {
            msg: "Email já cadastrado",
          },
          validate: {
            isEmail: {
              msg: "Email inválido",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [4, 50],
              msg: "Campo senha deve ter entre 4 e 50 caracteres",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    this.addHook("beforeSave", async (usuario) => {
      if (usuario.password) {
        usuario.password_hash = await bcryptjs.hash(usuario.password, 8);
      }
    });

    return this;
  }

  passwordIsValid(senha) {
    return bcryptjs.compare(senha, this.password_hash);
  }
}
