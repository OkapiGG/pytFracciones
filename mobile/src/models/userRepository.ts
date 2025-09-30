import { getDb } from '@/src/db/baseDatos';

export type Usuario = {
    idUsuario: number;
    nombre: string;
    companero: string;
    fechaCreacion: string;
    estado: number;
};

export const UserRepository = {
    async createUser(nombre: string, companero: string): Promise<void> {
        const db = await getDb();
        await db.runAsync(
            `INSERT INTO usuario (nombre, companero) VALUES (?, ?)`,
            [nombre, companero]
        );
    },

    async getByName(nombre: string): Promise<Usuario | null> {
        const db = await getDb();
        const row = await db.getFirstAsync(
            `SELECT * FROM usuario WHERE nombre = ?`,
            [nombre]
        ) as Usuario | undefined;
        return row ?? null;
    },


    async upsertAjustes(idUsuario: number, volumen: number): Promise<void> {
        const db = await getDb();
        await db.runAsync(
            `INSERT INTO ajustes (idUsuario, volumen)
            VALUES (?, ?)
            ON CONFLICT(idUsuario) DO UPDATE SET volumen = excluded.volumen`,
            [idUsuario, volumen]
        );
    },

    async listarUsuarios(): Promise<Usuario[]> {
        const db = await getDb();
        const rows = await db.getAllAsync(
            `SELECT * FROM usuario ORDER BY fechaCreacion DESC`
        ) as Usuario[];
        return rows;
    },
};




















// import executeSql from '../db/baseDatos';


// export const UserRepository = {
    
//     async createUser(nombre: string, companero: string): Promise<any> {
//         if (!nombre || !companero) {
//             throw new Error("El nombre y la contraseña son requeridos.");
//         }
        
//         const sql: string = 'INSERT INTO usuario (nombre, companero) VALUES (?, ?);';
//         try {
//             const result: any = await executeSql(sql, [nombre, companero]);
//             return result;
//         } catch (error: unknown) {
//             console.error("Error al agregar usuario:", error);
//             throw error;
//         }
//     },

//     async readUser(nombre: string): Promise<any> {
//         const sql: string = 'SELECT * FROM usuario WHERE nombre = ?;';
//         const result: any = await executeSql(sql, [nombre]);
//         return result.rows._array[0] as any;
//     }
// };