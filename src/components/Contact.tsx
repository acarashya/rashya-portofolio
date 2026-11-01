import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Check, Copy, ExternalLink, Instagram, Github, Linkedin, Sparkles, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA, Language } from '../data/portfolioData';
import { validateContactForm, buildMailtoUrl, ContactFormData } from '../utils/portfolio';
import { playCyberClick } from '../utils/audio';

interface ContactProps {
  currentLang: Language;
}

export const Contact: React.FC<ContactProps> = ({ currentLang }) => {
  const { socials } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    playCyberClick(900, 0.05);
    navigator.clipboard.writeText(socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playCyberClick(800, 0.06);

    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormErrors(validation.errors);
      return;
    }

    // Trigger celebration & mailto launch
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#E50924', '#FF243D', '#FFFFFF'],
      });
    } catch {
      // Ignore
    }

    setSubmitted(true);

    // Open mail client with prefilled details
    const mailtoUrl = buildMailtoUrl(socials.email, formData);
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-neutral-900 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-[#151515] text-xs font-mono text-[#E50924]">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>07 // {currentLang === 'en' ? 'TRANSMISSION & COLLABORATION' : 'KOMUNIKASI & HUBUNGAN'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display uppercase tracking-tight text-white">
            {currentLang === 'en' ? "LET'S CONNECT" : 'HUBUNGI SAYA'}
          </h2>
          <p className="text-neutral-400 text-sm max-w-xl">
            {currentLang === 'en'
              ? 'Have an idea, student project, or technical opportunity to discuss? Feel free to reach out.'
              : 'Punya ide proyek, diskusi teknologi, atau kesempatan kolaborasi? Jangan ragu untuk menghubungi.'}
          </p>
          <div className="w-16 h-1 bg-[#E50924] rounded-full mt-1" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Contact Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-neutral-800 hover:border-[#E50924]/40 transition-all shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#E50924]/10 border border-[#E50924]/30 flex items-center justify-center text-[#FF243D]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                    {currentLang === 'en' ? 'Direct Email' : 'Email Resmi'}
                  </p>
                  <p className="font-mono text-sm font-semibold text-white break-all">
                    {socials.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-neutral-800/80">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-[#181818] hover:bg-[#202020] border border-neutral-700/80 text-xs font-mono text-neutral-200 transition-colors"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">
                        {currentLang === 'en' ? 'Copied to Clipboard!' : 'Email Tersalin!'}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{currentLang === 'en' ? 'Copy Email Address' : 'Salin Alamat Email'}</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${socials.email}`}
                  className="px-3 py-2 rounded-lg bg-[#E50924] hover:bg-[#FF243D] text-white text-xs font-mono transition-colors"
                >
                  {currentLang === 'en' ? 'Send Mail' : 'Kirim'}
                </a>
              </div>
            </div>

            {/* WhatsApp Direct Card */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-neutral-800 hover:border-emerald-500/40 transition-all shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider">
                      WhatsApp
                    </p>
                    <p className="font-mono text-sm font-semibold text-white">
                      {socials.whatsapp.display}
                    </p>
                  </div>
                </div>

                <a
                  href={socials.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberClick(800, 0.04)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-mono transition-colors"
                >
                  <span>Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Links Cards */}
            <div className="space-y-3">
              <p className="text-xs font-mono text-neutral-400 uppercase tracking-wider font-semibold">
                {currentLang === 'en' ? 'Social Channels' : 'Saluran Media Sosial'}:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Instagram */}
                <a
                  href={socials.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberClick(700, 0.04)}
                  className="group p-4 rounded-xl bg-[#111111] border border-neutral-800 hover:border-pink-500/40 transition-all flex flex-col items-center text-center gap-2"
                >
                  <Instagram className="w-5 h-5 text-neutral-400 group-hover:text-pink-400 transition-colors" />
                  <span className="text-xs font-medium text-white">Instagram</span>
                  <span className="text-[10px] font-mono text-neutral-400">{socials.instagram.handle}</span>
                </a>

                {/* GitHub */}
                <a
                  href={socials.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberClick(700, 0.04)}
                  className="group p-4 rounded-xl bg-[#111111] border border-neutral-800 hover:border-white/40 transition-all flex flex-col items-center text-center gap-2"
                >
                  <Github className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                  <span className="text-xs font-medium text-white">GitHub</span>
                  <span className="text-[10px] font-mono text-neutral-400">{socials.github.handle}</span>
                </a>

                {/* LinkedIn */}
                <a
                  href={socials.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playCyberClick(700, 0.04)}
                  className="group p-4 rounded-xl bg-[#111111] border border-neutral-800 hover:border-sky-500/40 transition-all flex flex-col items-center text-center gap-2"
                >
                  <Linkedin className="w-5 h-5 text-neutral-400 group-hover:text-sky-400 transition-colors" />
                  <span className="text-xs font-medium text-white">LinkedIn</span>
                  <span className="text-[10px] font-mono text-neutral-400">{socials.linkedin.handle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#0F0F0F] border border-neutral-800 relative shadow-xl">
              
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-display font-bold text-xl text-white">
                  {currentLang === 'en' ? 'Send a Direct Message' : 'Kirim Pesan Langsung'}
                </h3>
                <span className="text-[11px] font-mono text-neutral-400">
                  {currentLang === 'en' ? 'Mail Client Integration' : 'Integrasi Klien Email'}
                </span>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-emerald-950/30 border border-emerald-700/50 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-900/60 text-emerald-300 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-white text-lg">
                    {currentLang === 'en' ? 'Thank You!' : 'Terima Kasih!'}
                  </h4>
                  <p className="text-sm text-neutral-300 max-w-md mx-auto">
                    {currentLang === 'en'
                      ? 'Your email draft has been generated. If your email app did not open automatically, please reach out directly at acarashya14@gmail.com.'
                      : 'Draf email Anda telah disiapkan. Jika aplikasi email tidak terbuka otomatis, Anda dapat menghubungi langsung via acarashya14@gmail.com.'}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-2 px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-mono text-white hover:bg-neutral-800 transition-colors"
                  >
                    {currentLang === 'en' ? 'Send Another Message' : 'Kirim Pesan Lain'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-mono text-neutral-400 mb-1.5">
                        {currentLang === 'en' ? 'Your Name *' : 'Nama Lengkap *'}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-white text-sm focus:outline-none transition-colors ${
                          formErrors.name
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-neutral-800 focus:border-[#E50924]'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-mono text-neutral-400 mb-1.5">
                        {currentLang === 'en' ? 'Your Email *' : 'Alamat Email *'}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-white text-sm focus:outline-none transition-colors ${
                          formErrors.email
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-neutral-800 focus:border-[#E50924]'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-mono text-neutral-400 mb-1.5">
                      {currentLang === 'en' ? 'Subject *' : 'Subjek Pesan *'}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      placeholder={currentLang === 'en' ? 'e.g. Collaboration on Aula FST / Student Project' : 'Contoh: Diskusi Proyek Web / Kolaborasi'}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-white text-sm focus:outline-none transition-colors ${
                        formErrors.subject
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-neutral-800 focus:border-[#E50924]'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-mono text-neutral-400 mb-1.5">
                      {currentLang === 'en' ? 'Message *' : 'Pesan *'}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder={currentLang === 'en' ? 'Write your thoughts or inquiry here...' : 'Tuliskan pesan atau pertanyaan Anda di sini...'}
                      className={`w-full px-4 py-2.5 rounded-xl bg-[#141414] border text-white text-sm focus:outline-none transition-colors resize-none ${
                        formErrors.message
                          ? 'border-red-500 focus:border-red-400'
                          : 'border-neutral-800 focus:border-[#E50924]'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E50924] hover:bg-[#FF243D] text-white font-medium text-sm transition-all duration-200 shadow-[0_0_20px_rgba(229,9,36,0.35)] active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>{currentLang === 'en' ? 'Send Message via Mail' : 'Kirim Pesan melalui Email'}</span>
                  </button>

                  <p className="text-[11px] text-neutral-400 text-center font-mono">
                    * {currentLang === 'en' ? 'Direct mail link generated instantly upon submission' : 'Tautan pesan langsung disiapkan secara instan saat dikirim'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
