import PasswordFields from './components/PasswordFields'
import useGeneratePasswords from "./hooks/useGeneratePasswords"
import './index.css';


export default function App(){
    const { passwords, setPasswordArray, passwordPlaceholders} = useGeneratePasswords()
    
    return (
        <main>
            <div id="container">
                <div id="header">
                    <h1>Generate a <span className="green">random password</span></h1>
                    <p>Never use an insecure password again.</p>
                    <button className="generate-btn" onClick={setPasswordArray}>
                        <i className="bi bi-lightning-charge margin"></i>
                        Generate passwords
                    </button>
                </div>
                <hr/>
                <div id="passwords-container">
                    {passwords.length > 0 ? 
                    <PasswordFields passwords={passwords}/> : passwordPlaceholders}
                </div>
            </div>
        </main>
    )
}
