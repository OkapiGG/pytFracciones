// // src/models/userRepository.js
// import { executeSql } from '../db/baseDatos';

// export const UserRepository = {
//   async addUser(nombre, contrasena) {
//     if (!nombre || !contrasena) {
//       throw new Error('El nombre y la contraseña son requeridos.');
//     }
//     return executeSql(
//       'INSERT INTO usuario (nombre, contrasena) VALUES (?, ?);',
//       [nombre, contrasena]
//     );
//   },

//   async findByNombre(nombre) {
//     const rs = await executeSql(
//       'SELECT * FROM usuario WHERE nombre = ? LIMIT 1;',
//       [nombre]
//     );
//     return rs.rows.length ? rs.rows.item(0) : null;
//   },

//   async all() {
//     const rs = await executeSql('SELECT * FROM usuario ORDER BY idUsuario DESC;');
//     const out = [];
//     for (let i = 0; i < rs.rows.length; i++) out.push(rs.rows.item(i));
//     return out;
//   },

//   async removeById(idUsuario) {
//     return executeSql('DELETE FROM usuario WHERE idUsuario = ?;', [idUsuario]);
//   },
// };
