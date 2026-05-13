import { useEffect } from "react";

export default function WelcomeScreen({ onFinish }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white text-4xl font-bold">
      Welcome • स्वागत • Bienvenido • 欢迎
    </div>
  );
}