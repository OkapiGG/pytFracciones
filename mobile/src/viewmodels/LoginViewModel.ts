// import { useState } from 'react';
// import { UserRepository } from '../models/userRepository';

// export const useLoginViewModel = () => {
//     const [name, setName] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);


//     const registerUser = async () => {
//         setError(null);
        
//         if (name.trim().length < 3) {
//             setError('El nombre debe tener al menos 3 caracteres.');
//             return { success: false };
//         }
        
//         setIsLoading(true);
        
//         try {
//             const result = await UserRepository.createUser(name.trim(), 'password123');
//             setIsLoading(false);
            
//             return { success: true, userId: result.insertId };

//         } catch (e) {
//             setIsLoading(false);
//             setError('Este nombre de usuario ya existe. Intenta con otro.');
//             return { success: false };
//         }
//     };

//     return {
//         name,
//         setName,
//         isLoading,
//         error,
//         registerUser
//     };
// };