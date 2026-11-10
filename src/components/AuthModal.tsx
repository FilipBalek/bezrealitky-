import React, { useState } from 'react';
import { X, Lock, CheckCircle2, Shield } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (email: string) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
}) => {
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSuccess(email);
      onClose();
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative bg-[#FAF8F5] rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-[#EAE4DC]">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#EAE4DC]/60 hover:bg-[#EAE4DC] text-[#1B382B] flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#1B382B] text-[#FAF8F5] flex items-center justify-center mx-auto mb-3">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-[#14231B]">
            {mode === 'login' ? 'Přihlášení do DOMOV' : 'Vytvoření účtu DOMOV'}
          </h3>
          <p className="text-xs text-[#5C6661] mt-1">
            Pro správu zpráv, inzerátů a uložených nabídek.
          </p>
        </div>

        {/* BankID / MojeID button concept for Czech trust */}
        <div className="space-y-3 mb-5">
          <button
            type="button"
            onClick={() => {
              onSuccess('identita@bankid.cz');
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-[#1B382B] bg-[#FFFFFF] border border-[#DDD6CA] hover:bg-[#F5F2EB] rounded-lg transition-colors"
          >
            <Shield className="w-4 h-4 text-[#2C5E45]" />
            <span>Rychlé přihlášení přes Bankovní identitu (BankID)</span>
          </button>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#EAE4DC]" />
          </div>
          <div className="relative flex justify-center text-[11px] uppercase tracking-wider text-[#7A8580]">
            <span className="bg-[#FAF8F5] px-2">Nebo e-mailem</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-[11px] font-semibold text-[#5C6661] uppercase mb-1">
              E-mailová adresa
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="vas@email.cz"
              className="w-full bg-[#FFFFFF] border border-[#DDD6CA] rounded-lg px-3 py-2 text-xs text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-[#5C6661] uppercase mb-1">
              Heslo
            </label>
            <input
              type="password"
              required
              defaultValue="tajneheslo123"
              className="w-full bg-[#FFFFFF] border border-[#DDD6CA] rounded-lg px-3 py-2 text-xs text-[#1B1F1C] focus:outline-none focus:ring-1 focus:ring-[#1B382B]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 px-4 text-xs font-bold text-[#FAF8F5] bg-[#1B382B] hover:bg-[#13281E] rounded-lg transition-colors shadow-sm"
          >
            {loading ? 'Přihlašování...' : mode === 'login' ? 'Přihlásit se' : 'Zaregistrovat se'}
          </button>
        </form>

        <div className="mt-4 pt-3 border-t border-[#EAE4DC] text-center text-xs text-[#5C6661]">
          {mode === 'login' ? (
            <p>
              Nemáte ještě účet?{' '}
              <button
                onClick={() => setMode('register')}
                className="font-semibold text-[#1B382B] underline"
              >
                Zaregistrujte se zdarma
              </button>
            </p>
          ) : (
            <p>
              Už máte účet?{' '}
              <button
                onClick={() => setMode('login')}
                className="font-semibold text-[#1B382B] underline"
              >
                Přihlaste se
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
