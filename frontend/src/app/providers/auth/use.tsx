import { useContext } from 'react';
import { AuthContext } from './context';
import { AuthContextType } from './types';

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);

    if (context === null) {
        throw new Error('useAuth может использоваться только внутри AuthProvider');
    }

    return context;
};
