import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('appFraccion');

export default db;

db.transaction(tx => {
    tx.executeSql('PRAGMA foreign_keys = ON;');
    //initDb(tx);
});

function initDb(tx){
    //-------------------usuario----------------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS usuario( 
            idUsuario INTEGER PRIMARY KEY,
            nombre TEXT NOT NULL UNIQUE,
            contrasena TEXT NOT NULL,
            fechaCreacion TEXT DEFAULT (datetime('now')),
            estado INTEGER NOT NULL DEFAULT 1 CHECK (estado IN (0,1))
        );`
    );
    //----------------leccion------------------------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS leccion(
            idLeccion INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            descripcion TEXT,
            habilidad TEXT,
            dificultad TEXT,
            orden INTEGER,
            estado INTEGER NOT NULL DEFAULT 1 CHECK (estado IN (0,1))
        );`
    );
    //--------------progresoLeccion-------------------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS progresoLeccion(
            idProgreso INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario INTEGER NOT NULL REFERENCES usuario(idUsuario) ON DELETE CASCADE,
            idLeccion INTEGER NOT NULL REFERENCES leccion(idLeccion) ON DELETE CASCADE,
            porcentaje INTEGER NOT NULL DEFAULT 0 CHECK (porcentaje BETWEEN 0 AND 100),
            mejorPuntaje INTEGER DEFAULT 0,
            ultimoAcceso TEXT,
            estado INTEGER NOT NULL DEFAULT 1 CHECK (estado IN (0,1)),
            UNIQUE(idUsuario, idLeccion)
        );`
    );
    //==============ejercicio--------------------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ejercicio(
            idEjercicio INTEGER PRIMARY KEY AUTOINCREMENT,
            idLeccion INTEGER NOT NULL REFERENCES leccion(idLeccion) ON DELETE CASCADE,
            tipo TEXT NOT NULL,
            enunciado TEXT NOT NULL,
            respuestaCorrecta TEXT,
            puntos INTEGER NOT NULL DEFAULT 0 CHECK (puntos >= 0),
            orden INTEGER
        );`
    );
    //--------------intento-----------------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS intento(
            idIntento INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario  INTEGER NOT NULL REFERENCES usuario(idUsuario) ON DELETE CASCADE,
            idEjercicio INTEGER NOT NULL REFERENCES ejercicio(idEjercicio) ON DELETE CASCADE,
            respuestaUsuario TEXT,
            correcto INTEGER NOT NULL DEFAULT 0 CHECK (correcto IN (0,1)),
            puntosObtenidos INTEGER DEFAULT 0 CHECK (puntosObtenidos >= 0),
            reintento INTEGER DEFAULT 0 CHECK (reintento >= 0)
        );`
    );
    //-----------------pistaIntento---------------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS pistaIntento(
            idPista INTEGER PRIMARY KEY AUTOINCREMENT,
            idIntento INTEGER NOT NULL REFERENCES intento(idIntento) ON DELETE CASCADE,
            textoPista TEXT,
            costoPuntos INTEGER DEFAULT 0 CHECK (costoPuntos >= 0)
        );`
    );
    //---------------------explicacionVista------------------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS explicacionVista(
            idExplicacion INTEGER PRIMARY KEY AUTOINCREMENT,
            idIntento INTEGER NOT NULL REFERENCES intento(idIntento) ON DELETE CASCADE,
            tipoExp TEXT,
            detalleExp TEXT
        );`
    );
    //--------------------insigniaDet-----------------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS insigniaDet(
            idInsigniaDet INTEGER PRIMARY KEY AUTOINCREMENT,
            clave TEXT NOT NULL UNIQUE,
            nombre TEXT NOT NULL,
            descripcion TEXT
        );`
    );
    //------------------insigniaOtorgada--------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS insigniaOtorgada(
            idOtorgada INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario INTEGER NOT NULL REFERENCES usuario(idUsuario) ON DELETE CASCADE,
            idInsigniaDet INTEGER NOT NULL REFERENCES insigniaDet(idInsigniaDet) ON DELETE CASCADE,
            fechaOtorgada TEXT DEFAULT (datetime('now')),
            UNIQUE(idUsuario, idInsigniaDet)
        );`
    );
    //---------------ajustes------------------
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS ajustes(
            idAjustes INTEGER PRIMARY KEY AUTOINCREMENT,
            idUsuario INTEGER NOT NULL REFERENCES usuario(idUsuario) ON DELETE CASCADE,
            volumen INTEGER DEFAULT 100 CHECK (volumen BETWEEN 0 AND 100),
            UNIQUE(idUsuario) -- asegura 1:1
        );`
    );

    //----------------Indices para sql-------------
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_prog_user     ON progresoLeccion(idUsuario);`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_prog_leccion  ON progresoLeccion(idLeccion);`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_ejer_leccion  ON ejercicio(idLeccion);`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_int_user      ON intento(idUsuario);`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_int_ejercicio ON intento(idEjercicio);`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_pista_intento ON pistaIntento(idIntento);`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_exp_intento   ON explicacionVista(idIntento);`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_ins_user      ON insigniaOtorgada(idUsuario);`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_ins_def       ON insigniaOtorgada(idInsigniaDet);`);
    tx.executeSql(`CREATE INDEX IF NOT EXISTS idx_ajustes_user  ON ajustes(idUsuario);`);
    
};


/**
 * Ejecuta una sentencia SQL.
 * @param {string} sql - La consulta SQL.
 *- El comando SQL a ejecutar
 * @param {Array<any>} params - Los parámetros para la consulta.
- Los parámetros que se usarán en la consulta
 * @returns {Promise<SQLite.SQLResultSet>} El resultado de la consulta.
 */
export const executeSql = (sql, params = []) => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(sql, params, (_, result) => resolve(result), (_, error) => reject(error));
        });
    });
};