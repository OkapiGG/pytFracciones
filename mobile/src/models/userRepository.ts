import executeSql from '../db/baseDatos';

export const UserRepository = {
    
    async createUser(nombre: string, contrasena: string): Promise<any> {
        if (!nombre || !contrasena) {
            throw new Error("El nombre y la contraseña son requeridos.");
        }
        
        const sql: string = 'INSERT INTO usuario (nombre, contrasena) VALUES (?, ?);';
        try {
            const result: any = await executeSql(sql, [nombre, contrasena]);
            return result;
        } catch (error: unknown) {
            console.error("Error al agregar usuario:", error);
            throw error;
        }
    },

    async readUser(nombre: string): Promise<any> {
        const sql: string = 'SELECT * FROM usuario WHERE nombre = ?;';
        const result: any = await executeSql(sql, [nombre]);
        return result.rows._array[0] as any;
    }
};