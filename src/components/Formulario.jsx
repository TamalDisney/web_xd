import { useState } from "react";

const FormularioLogin = ({ onLogin }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const EnviarFormulario = (e) => {
        e.preventDefault();

        // Enviar login y password sin validación
        onLogin({ login, password });

        // Limpiar Campos
        limpiarCampos();
    };

    const limpiarCampos = () => {
        setLogin('');
        setPassword('');
    };

    return (
        <div className="col-md-5 mt-2">
            <form onSubmit={EnviarFormulario}>
                <div className="card bg-primary text-white"> 
                    <div className="card-header bg-dark"> 
                        <h5 className="text-warning">Login</h5> 
                    </div>
                    <div className="card-body bg-info"> 
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-secondary text-light" id="basic-addon1">
                                Usuario:
                            </span>
                            <input type="text" className="form-control bg-light text-dark" value={login}
                            onChange={(e) => setLogin(e.target.value)} 
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text bg-secondary text-light" id="basic-addon1">
                                Contraseña:
                            </span>
                            <input type="password" className="form-control bg-light text-dark" value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default FormularioLogin;

