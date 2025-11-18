import './App.css';
import { Shield, Lock, KeyRound, Clock, ArrowRight } from "lucide-react";

export default function App() {
  const urls = {
    metodo1: "https://mi-app-aes128.vercel.app/",
    metodo2: "https://vercel.com/erick-eduardos-projects-7505bdcd/seguridad/ArZZKc8Y7Q7mExog1W1Ga79LzCLY",
    metodo3: "https://auth-pin-app-qxx9.vercel.app/",
    metodo4: "https://enlace-temporal2.vercel.app/",
  };

  return (
    <div className="container">
      <div className="header">
        <div className="icon-shield">
          <Shield size={40} />
        </div>

        <h1>Métodos de Seguridad</h1>
        <p className="subtitle">Selecciona el método de protección que deseas utilizar</p>
      </div>

      <div className="buttons-grid">

        <button className="btn btn-blue" onClick={() => window.open(urls.metodo1, "_blank")}>
          <div className="btn-icon">
            <Shield size={28} />
          </div>
          <div className="btn-content">
            <h3>Cifrado Simétrico</h3>
            <span className="btn-subtitle">AES-128</span>
          </div>
          <div className="btn-arrow">
            <ArrowRight size={24} />
          </div>
        </button>

        <button className="btn btn-purple" onClick={() => window.open(urls.metodo2, "_blank")}>
          <div className="btn-icon">
            <Lock size={28} />
          </div>
          <div className="btn-content">
            <h3>Autenticación PIN</h3>
            <span className="btn-subtitle">Código de Seguridad</span>
          </div>
          <div className="btn-arrow">
            <ArrowRight size={24} />
          </div>
        </button>

        <button className="btn btn-green" onClick={() => window.open(urls.metodo3, "_blank")}>
          <div className="btn-icon">
            <KeyRound size={28} />
          </div>
          <div className="btn-content">
            <h3>Cifrado Hash</h3>
            <span className="btn-subtitle">SHA-256</span>
          </div>
          <div className="btn-arrow">
            <ArrowRight size={24} />
          </div>
        </button>

        <button className="btn btn-orange" onClick={() => window.open(urls.metodo4, "_blank")}>
          <div className="btn-icon">
            <Clock size={28} />
          </div>
          <div className="btn-content">
            <h3>Enlace Temporal</h3>
            <span className="btn-subtitle">Autenticación Limitada</span>
          </div>
          <div className="btn-arrow">
            <ArrowRight size={24} />
          </div>
        </button>

      </div>
    </div>
  );
}
