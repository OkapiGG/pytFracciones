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
            `INSERT INTO usuario (nombre, companero)
            VALUES (?, ?)
            ON CONFLICT(nombre) DO UPDATE SET companero = excluded.companero`,
            [nombre.trim(), companero.trim()]
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