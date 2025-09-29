// import { useState } from 'react';
// import { UserRepository } from '../models/userRepository';

// interface LoginResult {
//     success: boolean;
//     message?: string;
//     userId?: number;
// }

// export const useLoginViewModel = () => {
//     const [name, setName] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const login = async (): Promise<LoginResult> => {
//         if (name.trim().length < 3) {
//             return { success: false, message: 'El nombre debe tener al menos 3 caracteres.' };
//         }
    
//         setIsLoading(true);
    
//     try {
//         const result = await UserRepository.addUser(name.trim(), 'password123'); 
//         return { success: true, userId: result.insertId };
//     }  catch (error) {
//         return { success: false, message: 'Este nombre de usuario ya existe.' };
//     } finally {
//         setIsLoading(false);
//     }
//     };

//     return {
//         name,
//         setName,
//         isLoading,
//         login,
//     };
// };

