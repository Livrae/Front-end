import { useState, useEffect } from 'react';

export function useMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Fecha o menu quando a tela é redimensionada para evitar bugs de layout
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1036) { // mesma largura do seu media query
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fecha o menu quando um link é clicado
    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return {
        isMenuOpen,
        toggleMenu,
        handleLinkClick
    };
}