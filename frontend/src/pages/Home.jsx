import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

      {/* 1. HERO SECTION */}
      <section className="relative flex items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900 overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight text-gray-900 dark:text-white">
            Build Job-Ready Skills with Code Bridge
          </h1>
          <p className="text-xl mb-10 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Learn programming with structured paths, AI assistance, and real-world projects.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
              Start Learning
            </Link>
            <Link to="/courses" className="px-8 py-4 bg-transparent border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300">
              Explore Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST / PARTNERS SECTION */}
      <section className="py-12 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 text-center px-6">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">Trusted by learners worldwide</p>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-2xl font-bold flex items-center gap-2"><span className="w-6 h-6 bg-blue-500 rounded-full inline-block"></span> Google</div>
          <div className="text-2xl font-bold flex items-center gap-2"><span className="w-6 h-6 bg-green-500 rounded-md inline-block"></span> Microsoft</div>
          <div className="text-2xl font-bold flex items-center gap-2"><span className="w-6 h-6 bg-blue-600 rounded-full inline-block"></span> Meta</div>
        </div>
      </section>

      {/* 3. BENEFITS SECTION (Why Code Bridge) */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold mb-12 text-center">Why Code Bridge</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center md:text-left">
            <div className="text-4xl mb-4 text-blue-600 flex justify-center md:justify-start">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Job-ready skills</h3>
            <p className="text-gray-600 dark:text-gray-400">Curriculum designed to get you hired.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl mb-4 text-purple-600 flex justify-center md:justify-start">🤖</div>
            <h3 className="text-xl font-semibold mb-2">AI-powered learning</h3>
            <p className="text-gray-600 dark:text-gray-400">Instant help when you get stuck.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl mb-4 text-green-600 flex justify-center md:justify-start">📚</div>
            <h3 className="text-xl font-semibold mb-2">Structured paths</h3>
            <p className="text-gray-600 dark:text-gray-400">No guesswork, just follow the roadmap.</p>
          </div>
          <div className="text-center md:text-left">
            <div className="text-4xl mb-4 text-orange-600 flex justify-center md:justify-start">🌍</div>
            <h3 className="text-xl font-semibold mb-2">Learn anytime</h3>
            <p className="text-gray-600 dark:text-gray-400">Self-paced learning on any device.</p>
          </div>
        </div>
      </section>

      {/* 4. UPGRADED CARDS SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto bg-gray-50 dark:bg-gray-800/50 rounded-3xl mb-16 border border-gray-100 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-12 text-center">Platform Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "AI Assistant", icon: "🤖", path: "/ai-assistant", desc: "Get instant, context-aware coding help for any problem.", badge: "✨ New", duration: "Available 24/7", level: "All Levels" },
            { title: "Structured Courses", icon: "📚", path: "/courses", desc: "Step-by-step learning paths for modern web development.", badge: "🔥 Popular", duration: "100+ Hours", level: "Beginner" },
            { title: "Resource Downloads", icon: "⬇️", path: "/downloads", desc: "Access code snippets, templates, and full project guides.", badge: "", duration: "Instant Access", level: "All Levels" }
          ].map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow border border-gray-200 dark:border-gray-700 hover:border-blue-500/30 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-3xl bg-blue-50 dark:bg-gray-800 p-3 rounded-lg">{item.icon}</div>
                {item.badge && (
                  <span className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 font-bold px-3 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                {item.desc}
              </p>
              <div className="flex gap-4 text-sm font-medium text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-gray-800">
                <span className="flex items-center">⏱️ {item.duration}</span>
                <span className="flex items-center">📊 {item.level}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. EXPLORE LEARNING PATHS (CATEGORY SECTION) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Explore Learning Paths</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Link to="/courses" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition bg-white dark:bg-gray-800 hover:-translate-y-1 duration-300 text-center">
            <div className="text-blue-600 dark:text-blue-400 font-bold mb-2 text-3xl">💻</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Frontend</h3>
            <p className="text-sm text-gray-500 mt-2">HTML, CSS, React</p>
          </Link>
          <Link to="/courses" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition bg-white dark:bg-gray-800 hover:-translate-y-1 duration-300 text-center">
            <div className="text-green-600 dark:text-green-400 font-bold mb-2 text-3xl">⚙️</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Backend</h3>
            <p className="text-sm text-gray-500 mt-2">Node.js, Express, DBs</p>
          </Link>
          <Link to="/courses" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition bg-white dark:bg-gray-800 hover:-translate-y-1 duration-300 text-center">
            <div className="text-purple-600 dark:text-purple-400 font-bold mb-2 text-3xl">🚀</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">Full Stack</h3>
            <p className="text-sm text-gray-500 mt-2">MERN, Next.js</p>
          </Link>
          <Link to="/courses" className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition bg-white dark:bg-gray-800 hover:-translate-y-1 duration-300 text-center">
            <div className="text-orange-600 dark:text-orange-400 font-bold mb-2 text-3xl">🧠</div>
            <h3 className="font-semibold text-gray-900 dark:text-white">AI & ML</h3>
            <p className="text-sm text-gray-500 mt-2">Python, Models</p>
          </Link>
        </div>
      </section>

      {/* 6. SOCIAL PROOF */}
      <section className="py-20 px-6 bg-blue-50 dark:bg-gray-800/80 text-center border-y border-gray-100 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-8">Join 1000+ learners building their future</h2>
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
          <p className="text-lg italic text-gray-600 dark:text-gray-300 mb-6">
            "Code Bridge's structured approach finally helped me break out of tutorial hell. The integrated AI assistant and perfectly paced courses helped me land my first role within 6 months!"
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 text-blue-600 rounded-full flex items-center justify-center font-bold font-serif text-lg">AL</div>
            <div className="text-left">
              <h4 className="font-bold">Alex Lawson</h4>
              <p className="text-sm text-gray-500">Junior Developer</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. STRONG CTA SECTION */}
      <section className="py-24 px-6 text-center bg-white dark:bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6">Start Learning Today</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
            Join the millions of learners who have transformed their lives through code.
          </p>
          <Link to="/register" className="inline-block px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition duration-300">
            Get Started for Free
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 border-t border-gray-200 dark:border-slate-800 text-center text-gray-500 font-medium text-sm bg-gray-50 dark:bg-gray-900">
        <p>© 2026 Code Bridge • Professional Learning Platform</p>
      </footer>

    </div>
  );
}