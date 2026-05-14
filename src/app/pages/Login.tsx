import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { toast } from "sonner";

export function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({ email: "", password: "", confirmPassword: "" });

    // Validate email
    if (!validateEmail(formData.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Por favor ingresa un correo electrónico válido",
      }));
      return;
    }

    // Validate password
    if (formData.password.length < 6) {
      setErrors((prev) => ({
        ...prev,
        password: "La contraseña debe tener al menos 6 caracteres",
      }));
      return;
    }

    // Validate confirm password for registration
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: "Las contraseñas no coinciden",
      }));
      return;
    }

    // Success
    toast.success(isLogin ? "Inicio de sesión exitoso" : "Registro exitoso");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl mb-2">
              {isLogin ? "INICIAR SESIÓN" : "CREAR CUENTA"}
            </h1>
            <p className="text-gray-600">
              {isLogin
                ? "Ingresa a tu cuenta para continuar"
                : "Regístrate para disfrutar de una mejor experiencia"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:border-[#111111] transition-colors"
                  required
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  setErrors({ ...errors, email: "" });
                }}
                className={`w-full px-4 py-3 border transition-colors ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-[#111111]"
                } focus:outline-none`}
                required
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">
                Contraseña
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  setErrors({ ...errors, password: "" });
                }}
                className={`w-full px-4 py-3 border transition-colors ${
                  errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-[#111111]"
                } focus:outline-none`}
                required
              />
              {errors.password && (
                <p className="text-red-600 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    });
                    setErrors({ ...errors, confirmPassword: "" });
                  }}
                  className={`w-full px-4 py-3 border transition-colors ${
                    errors.confirmPassword
                      ? "border-red-500 focus:border-red-500"
                      : "border-gray-300 focus:border-[#111111]"
                  } focus:outline-none`}
                  required
                />
                {errors.confirmPassword && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            )}

            {isLogin && (
              <div className="text-right">
                <Link
                  to="#"
                  className="text-sm text-gray-600 hover:text-[#111111] transition-colors"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#111111] text-white py-4 hover:bg-gray-800 transition-colors"
            >
              {isLogin ? "Iniciar sesión" : "Crear cuenta"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({ email: "", password: "", confirmPassword: "" });
              }}
              className="text-sm text-gray-600 hover:text-[#111111] transition-colors"
            >
              {isLogin ? (
                <>
                  ¿No tienes cuenta?{" "}
                  <span className="font-semibold">Regístrate</span>
                </>
              ) : (
                <>
                  ¿Ya tienes cuenta?{" "}
                  <span className="font-semibold">Inicia sesión</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
