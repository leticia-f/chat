import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const authObject = {'ProjectID':'21933e86-b564-4e5e-a6f8-2b0f0a307544', 'User-Name':username, 'User-Secret':password}
        try{
            await axios.get("https://api.chatengine.io/chats", {headers:authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        }
        catch(error){
            setError("Oops, errou seu login, volte após o sinal")
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Chat Application </h1>

                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                </form>

                <div align="center">
                    <button type="submit" className="button">
                        <span> Start Chatting </span>
                    </button>
                </div>

                <h2 className="error"> {error} </h2>

            </div>
        </div>
    )
}

export default LoginForm;