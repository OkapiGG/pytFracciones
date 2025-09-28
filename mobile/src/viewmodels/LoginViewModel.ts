import { useState } from 'react';
//import { UserRepository } from '../models/userRepository';

// Define una estructura para el resultado de la operación de login
interface LoginResult {
    success: boolean;
    message?: string;
    userId?: number;
}

export const useLoginViewModel = () => {
    // Estado que la Vista necesita
    const [name, setName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Función que la Vista llamará
    const login = async (): Promise<LoginResult> => {
        if (name.trim().length < 3) {
            return { success: false, message: 'El nombre debe tener al menos 3 caracteres.' };
        }
    
        setIsLoading(true);
    
    try {
        const result = await UserRepository.addUser(name.trim(), 'password123'); // Contraseña de prueba
        return { success: true, userId: result.insertId };
    }  catch (error) {
        return { success: false, message: 'Este nombre de usuario ya existe.' };
    } finally {
        setIsLoading(false);
    }
    };

    // Expone el estado y las funciones a la Vista
    return {
        name,
        setName,
        isLoading,
        login,
    };
};

