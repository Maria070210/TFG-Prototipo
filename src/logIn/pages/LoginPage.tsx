import React, { useState } from 'react'

export const LoginPage = () => { // Exportamos la función para poder visualizarla en App.tsx que es donde la importo
    const [email, setEmail] = useState(''); // Aquí definimos la variable email y le ponemos como valor predeterminado '', osea nada
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); // Esto permite evitar comportamientos por defecto del navegador al recargar la página después de hacer submit
        console.log(`Enviando datos: ${email + password}`);
    }
    return (
        <div className="login-container"> {/* En React se usa className y en HTML se usa class */}
            <h1>¡Bienvenido!</h1>
            <h3>Iniciar Sesión</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    id="email" 
                    name="email" 
                    type="email"
                    placeholder='Correo electrónico' // Para poner en predeterminado lo que quieres que ponga dentro
                    onChange={(event) => setEmail(event.target.value)} // onChange es una función que detecta cuando cambia el contenido y escribes algo
                    required // Es estrictamente necesario que se rellene
                    // event es el evento capturado
                    // target es el evento que se ha disparado al introducir algo
                    // value es lo que se ha escrito dentro
                    // Por ello, todo junto event.target.value recoge la información que hay escrita dentro del input y con setEmail actualizamos el valor de email al nuevo
                    />
                    <input 
                    id="password" 
                    name="password" 
                    type="password"
                    placeholder='Contraseña' 
                    onChange={(event) => setPassword(event.target.value)}
                    required 
                    />
                    <button className='log-button' type='submit'>Entrar</button>
                    
            </form>
        </div>
    )
}


