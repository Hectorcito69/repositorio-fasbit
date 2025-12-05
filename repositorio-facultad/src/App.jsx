import React, { useState } from 'react';
import { Search, Upload, FileText, Download, Menu, X, ChevronRight, GraduationCap } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // Datos simulados (esto vendría de tu Base de Datos después)
  const theses = [
    {
      id: 1,
      title: "Optimización de Bioprocesos mediante IA",
      author: "Juan Pérez",
      year: "2024",
      career: "Ing. en Sistemas",
      abstract: "Uso de redes neuronales para mejorar la fermentación bacteriana en entornos controlados."
    },
    {
      id: 2,
      title: "Análisis Genómico de Especies Endémicas",
      author: "María González",
      year: "2023",
      career: "Biología",
      abstract: "Estudio comparativo del genoma de especies vegetales de la región mixteca."
    },
    {
      id: 3,
      title: "Automatización de Invernaderos IoT",
      author: "Carlos López",
      year: "2024",
      career: "Innovación Tecnológica",
      abstract: "Sistema de sensores distribuidos para el control de humedad y temperatura."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* --- FONDO ANIMADO (Estética Bio-Tech) --- */}
      <div className="fixed inset-0 w-full h-full -z-10">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[1px]"></div> {/* Capa para asegurar legibilidad */}
      </div>

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-slate-900/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-tr from-emerald-400 to-cyan-500 p-2 rounded-lg">
                <GraduationCap className="text-white h-6 w-6" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                FASBIT
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Inicio</a>
                <a href="#" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Repositorio</a>
                <a href="#" className="hover:text-emerald-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Estadísticas</a>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
                  <Upload size={16} /> Subir Tesis
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <main className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-emerald-400 font-semibold tracking-wide uppercase text-sm">Facultad de Sistemas Biológicos e Innovación Tecnológica</h2>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            Repositorio Digital de <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Tesis y Proyectos</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400">
            Explora la investigación académica de nuestra comunidad. Un espacio donde la biología se encuentra con la innovación.
          </p>
          
          {/* Search Bar - Funcional y Estética */}
          <div className="mt-8 max-w-xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative flex items-center bg-slate-900 rounded-lg p-2 border border-slate-700">
              <Search className="text-slate-400 ml-3" />
              <input 
                type="text" 
                placeholder="Buscar por título, autor o palabra clave..." 
                className="w-full bg-transparent text-white p-3 focus:outline-none placeholder-slate-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* --- GRID DE TESIS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {theses.filter(t => t.title.toLowerCase().includes(searchTerm.toLowerCase())).map((thesis) => (
            <div key={thesis.id} className="group relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1">
              
              {/* Badge Carreras */}
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {thesis.year}
                </span>
              </div>

              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 group-hover:text-emerald-400 transition-colors">
                <FileText size={24} />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2 group-hover:text-emerald-300 transition-colors">
                {thesis.title}
              </h3>
              
              <p className="text-sm text-slate-400 mb-4 font-medium">
                Autor: <span className="text-slate-200">{thesis.author}</span>
              </p>
              
              <p className="text-slate-400 text-sm mb-6 line-clamp-3">
                {thesis.abstract}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs text-slate-500 font-mono">{thesis.career}</span>
                <button className="flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
                  Ver Tesis <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;