import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, RotateCcw } from 'lucide-react';
import { PORTFOLIO_INFO, PROJECTS } from '../data/portfolioData';

interface HistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalPlayground: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">⚡ Nguyễn Thanh Sang Developer Terminal v2.5.0</p>
          <p className="text-xs text-slate-400">Gõ <span className="text-amber-300 font-semibold">'help'</span> hoặc click vào các lệnh gợi ý phía dưới để tương tác.</p>
        </div>
      ),
    },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    let resNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        resNode = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-300 font-semibold">Danh sách lệnh khả dụng:</p>
            <p><span className="text-amber-300 font-mono">projects</span> : Xem danh sách 4 dự án thực tế</p>
            <p><span className="text-amber-300 font-mono">skills</span>   : Xem bảng kỹ năng và tech stack</p>
            <p><span className="text-amber-300 font-mono">whoami</span>   : Giới thiệu bản thân và định hướng</p>
            <p><span className="text-amber-300 font-mono">contact</span>  : Thông tin kết nối và trao đổi công việc</p>
            <p><span className="text-amber-300 font-mono">test</span>     : Chạy kiểm thử tự động toàn hệ thống</p>
            <p><span className="text-amber-300 font-mono">clear</span>    : Xóa lịch sử terminal</p>
          </div>
        );
        break;

      case 'projects':
        resNode = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-300 font-semibold">🚀 4 Dự án thực tế nổi bật:</p>
            {PROJECTS.map((p, i) => (
              <div key={i} className="pl-2 border-l border-cyan-500/30">
                <span className="text-white font-bold">{p.title}</span> ({p.category})
                <p className="text-slate-400 text-[11px]">{p.description}</p>
                <p className="text-indigo-300 text-[10px] font-mono">Tech: {p.tags.slice(0, 4).join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
        resNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-300 font-semibold">🛠️ Tech Stack & Kiến trúc:</p>
            <p>• Frontend: React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Vite</p>
            <p>• Motion & 3D: GSAP, Lenis Smooth Scroll, Three.js, Framer Motion</p>
            <p>• State & APIs: Zustand, TanStack Query, REST APIs, i18next</p>
            <p>• Mobile & Tools: Flutter, Dart, Docker, Git CI/CD</p>
          </div>
        );
        break;

      case 'whoami':
        resNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-semibold">{PORTFOLIO_INFO.name} ({PORTFOLIO_INFO.nickname})</p>
            <p>{PORTFOLIO_INFO.role}</p>
            <p className="text-slate-400">{PORTFOLIO_INFO.bio}</p>
            <p className="text-cyan-300">Vị trí: {PORTFOLIO_INFO.location} | Trạng thái: {PORTFOLIO_INFO.status}</p>
          </div>
        );
        break;

      case 'contact':
        resNode = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-emerald-400 font-semibold">📬 Kênh liên hệ trực tiếp:</p>
            <p>• Email: <span className="text-cyan-300 font-mono">{PORTFOLIO_INFO.socials.email}</span></p>
            <p>• GitHub: <span className="text-cyan-300 font-mono">{PORTFOLIO_INFO.socials.github}</span></p>
            <p>• Trạng thái: Sẵn sàng nhận dự án freelance / full-time hợp tác</p>
          </div>
        );
        break;

      case 'test':
        resNode = (
          <div className="space-y-1 text-xs font-mono text-emerald-400">
            <p>RUNNING TEST SUITE (Unit, Integration, E2E)...</p>
            <p>✓ [LandingConDao] GSAP animation & Lenis scroll FPS check: 60 FPS (PASS)</p>
            <p>✓ [ConDaoTrip-FE] Next.js 16 SSR & i18n routing: PASS (0 errors)</p>
            <p>✓ [CaoNguyenXanh] Three.js WebGL canvas & PDF export: PASS</p>
            <p>✓ [OdysseyHaGiang] Meta SEO & Schema.org JSON-LD: VALIDATED</p>
            <p className="text-cyan-300 font-bold">ALL 4 TEST SUITES PASSED (100% HEALTHY)</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        resNode = (
          <p className="text-xs text-rose-400">
            Lệnh '{trimmed}' không được nhận diện. Gõ <span className="underline font-bold text-amber-300">help</span> để xem danh sách lệnh.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmdText, output: resNode }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal('');
  };

  return (
    <section id="playground" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-left">
        
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
            <Terminal className="w-3.5 h-3.5" />
            INTERACTIVE SHELL
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Developer Console Trực Tiếp
          </h2>
          <p className="text-sm text-slate-400">
            Tương tác với terminal để khám phá nhanh các module dự án và thông tin kỹ thuật
          </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-2xl bg-black/80 border border-slate-800 shadow-2xl shadow-cyan-950/20 overflow-hidden font-mono text-xs sm:text-sm backdrop-blur-xl">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-slate-400 text-xs">sang@developer-machine:~</span>
            </div>
            <button
              onClick={() => handleCommand('clear')}
              className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Clear terminal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Console Area */}
          <div className="p-4 sm:p-5 h-80 overflow-y-auto space-y-3.5 text-slate-300">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="text-slate-500">❯</span>
                  <span>{item.command}</span>
                </div>
                <div className="pl-4">{item.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Quick command buttons */}
          <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-500 text-[11px] mr-1">Gợi ý nhanh:</span>
            {['projects', 'skills', 'whoami', 'test', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2 py-0.5 rounded bg-slate-800/80 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/60 text-[11px] transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-4 py-3 bg-slate-900/60 border-t border-slate-800">
            <span className="text-cyan-400 font-bold">❯</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Nhập lệnh (vd: projects, test, whoami)..."
              className="flex-1 bg-transparent text-white placeholder-slate-500 focus:outline-none text-xs sm:text-sm font-mono"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors"
              aria-label="Gửi lệnh"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};
