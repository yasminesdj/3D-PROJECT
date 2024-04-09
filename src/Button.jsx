import React from 'react';
import { Html } from '@react-three/drei';
import "./Rotate.css"; // Import du fichier CSS

const Button = () => {
  const buttonStyle = {
    padding: '1.5rem 3rem', // Augmenter la taille du bouton
    backgroundColor: '#cb4c46', // Changer la couleur du bouton en rouge
    color: 'white',
    border: 'none',
    borderRadius: '8px', // Augmenter la bordure arrondie
    cursor: 'pointer',
    position: 'absolute',
    left: '20%',
    bottom: '50px',
    fontSize: '1.2rem', // Augmenter la taille du texte
    fontWeight: 'bold',
    textTransform: 'uppercase', // Mettre en majuscules
    letterSpacing: '1px', // Augmenter l'espacement entre les lettres
    outline: 'none',
    transform: 'rotateX(45deg)', // Incliner le bouton vers le bas
  };

  return (
    <Html position={[-3, 1, -2]}> {/* Utiliser une valeur plus petite pour déplacer davantage vers la gauche */}
      <button className="rotateButton" style={buttonStyle} onClick={() => console.log("clicked")}>Your Car Estimation</button>
    </Html>
  );
};

export default Button;
