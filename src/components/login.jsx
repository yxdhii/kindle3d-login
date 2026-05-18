import { useRef, useState } from "react";
import { useWebGLBackground } from "../hooks/useWebGLBackground";
import Textbox from "./Textbox";
import "../styles/login.css";
 
const Login = () => {
  const canvasRef = useRef(null);
  useWebGLBackground(canvasRef);
  const [loading, setLoading] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };
 
  return (
    <>
      <canvas ref={canvasRef} className="bg-canvas" />
      <div className="page-center">
        <div className="card">
          {/* Logo */}
          <div className="logo">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M14 2L4 8v12l10 6 10-6V8L14 2z" fill="url(#lg1)" />
              <path
                d="M14 2v24M4 8l10 6 10-6"
                stroke="#fff"
                strokeWidth="1.2"
                strokeOpacity="0.25"
              />
              <defs>
                <linearGradient
                  id="lg1"
                  x1="4"
                  y1="2"
                  x2="24"
                  y2="26"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4fa8ff" />
                  <stop offset="1" stopColor="#2563eb" />
                </linearGradient>
              </defs>
            </svg>
            <span>
              Kindle<strong>3D</strong>
            </span>
          </div>
 
          <p className="subtitle">WELCOME BACK!</p>
 
          <form onSubmit={handleSubmit}>
            {/* SSO buttons */}
            <div className="sso">
              <button type="button" className="sso-btn">
                <svg width="18" height="18" viewBox="0 0 18 18">
                  <path
                    d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                    fill="#4285F4"
                  />
                  <path
                    d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                    fill="#34A853"
                  />
                  <path
                    d="M3.964 10.71A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.042l3.007-2.332z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z"
                    fill="#EA4335"
                  />
                </svg>
                <span>Google</span>
              </button>
              <button type="button" className="sso-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
                  <path d="M12.47 0c.07.93-.27 1.86-.81 2.55-.54.7-1.4 1.24-2.28 1.17-.09-.9.31-1.85.82-2.48C10.76.56 11.66.05 12.47 0zM15.7 13.06c-.45.98-.67 1.42-1.25 2.29-.81 1.22-1.95 2.74-3.37 2.75-1.26.01-1.58-.82-3.29-.81-1.71.01-2.06.83-3.33.82-1.41-.01-2.49-1.38-3.3-2.6C-.23 12.84-.51 9.3 1.01 7.4c1.05-1.34 2.71-2.12 4.28-2.12 1.6 0 2.6.83 3.92.83 1.28 0 2.06-.84 3.91-.84 1.4 0 2.88.76 3.94 2.08-.14.08-2.35 1.38-2.12 4.1.22 2.65 2.39 3.44 2.76 3.61z" />
                </svg>
                <span>Apple</span>
              </button>
            </div>
 
            <div className="or">
              <span />
              OR
              <span />
            </div>
 
            <Textbox type="text" id="email" label="Email" />
            <Textbox type="password" id="password" label="Password" />
 
            <button type="submit" className="login-btn" disabled={loading}>
              {loading ? (
                <svg
                  className="spinner"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="8"
                    stroke="white"
                    strokeWidth="2.5"
                    fill="none"
                    strokeDasharray="40"
                    strokeDashoffset="30"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                "LOGIN"
              )}
            </button>
          </form>
 
          <a href="#" className="forgot">
            Forgot password?
          </a>
 
          <p className="footer">
            Don't have an account? <a href="#">Register here</a>
          </p>
        </div>
      </div>
    </>
  );
};
 
export default Login;