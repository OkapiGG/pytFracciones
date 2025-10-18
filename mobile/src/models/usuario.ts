
export type Usuario = {
    idUsuario: number;        
    nombre: string;           
    companero: string;       
    fechaCreacion: string;
    estado: 0 | 1;            
};

export type Leccion = {
    idLeccion: number,
    titulo: string,
    descripcion: string,
    habilidad: string,
    dificultad: string,
    orden: number,
    estado: 0 | 1
};

export type progresoLeccion = {
    idProgreso: number,
    idUsuario: number,
    idLeccion: number,
    porcentaje: number,
    mejorPorcentaje: number,
    ultimoAcceso: string,
    estado: number
};