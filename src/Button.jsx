import { Html } from "@react-three/drei";
import "./Rotate.css"; // Import du fichier CSS

const Button = () => {
  const buttonStyle = {
    padding: '1rem 2rem',
    border: '1px solid white',
    color: 'black',
    cursor: 'pointer',
    position: 'absolute',
    left: '50%',
    bottom: '80px',

  };

  return ( 
    <Html>
      <button className="rotateButton" style={buttonStyle} onClick={() => console.log("clicked")}>static</button>
    </Html>
  );
};

export default Button;
