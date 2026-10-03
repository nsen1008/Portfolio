import { useLanguage } from '../i18n/useLanguage';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { usePortfolioData } from '../i18n/portfolio';
import { SplitText } from './animations/SplitText';
import { FadeInView } from './animations/FadeInView';
import { RollingText } from './animations/RollingText';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { info: PORTFOLIO_INFO } = usePortfolioData();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedPurpose, setSelectedPurpose] = useState('Hiring (Full-time / Intern)');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_INFO.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || isSubmitting) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const emailjsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (emailjsServiceId && emailjsTemplateId && emailjsPublicKey) {
        // Gửi qua EmailJS với template tùy chỉnh giao diện riêng (không có quảng cáo)
        await emailjs.send(
          emailjsServiceId,
          emailjsTemplateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            purpose: t(selectedPurpose),
            message: formData.message || '(Không có ghi chú thêm)',
            to_name: PORTFOLIO_INFO.name,
            reply_to: formData.email,
          },
          emailjsPublicKey
        );
      } else {
        // Fallback FormSubmit nếu chưa cấu hình EmailJS
        const response = await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_INFO.socials.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            'Họ và tên': formData.name,
            'Email liên hệ': formData.email,
            'Mục đích liên hệ': t(selectedPurpose),
            'Nội dung tin nhắn': formData.message || '(Không có ghi chú thêm)',
            _subject: `[Portfolio Contact] Tin nhắn mới từ ${formData.name}`,
            _template: 'box',
            _captcha: 'false',
          }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => null);
          throw new Error(data?.message || 'Failed to submit');
        }
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setSelectedPurpose('Hiring (Full-time / Intern)');
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(
        t('Không thể gửi tin nhắn qua biểu mẫu lúc này. Vui lòng gửi email trực tiếp qua thanhsang2418@gmail.com')
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactPurposes = [
    'Hiring (Full-time / Intern)',
    'Freelance Project',
    'Project Collaboration',
    'Consultation & Inquiry',
  ];

  return (
    <section id="contact" className="contact-content w-full text-left pt-4 pb-20 sm:pb-28">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10">

        {/* Page Title Header: Exact match to About page */}
        <div className="mb-12 sm:mb-16">
          <h1 className="text-6xl sm:text-7xl lg:text-[110px] font-bold text-black tracking-tight font-display leading-[0.9]">
            <SplitText text={t("Contact")} delay={0.04} />
          </h1>
        </div>

        {/* Main Grid: Left Big Statement + Right Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black tracking-tight leading-[1.25] font-display">
              <SplitText text={t("If you prefer not to fill out forms, feel free to email me directly and let's talk about the next big thing!")} delay={0.05} />
            </h2>

            {/* Direct Contacts with Vexoo typography & Rolling Hover */}
            <FadeInView delay={0.2} className="space-y-6 pt-2">
              <div>
                <span className="text-xs font-sans text-black/50 block mb-1">
                  {t("Phone")}
                </span>
                <a
                  href={`tel:${PORTFOLIO_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="footer-link text-xl sm:text-2xl font-medium text-black font-display tracking-tight"
                >
                  <span>{PORTFOLIO_INFO.phone}</span>
                </a>
              </div>

              <div>
                <span className="text-xs font-sans text-black/50 block mb-1">
                  Email
                </span>
                <div className="contact-email flex items-center gap-3">
                  <a
                    href={`mailto:${PORTFOLIO_INFO.socials.email}`}
                    className="footer-link text-xl sm:text-2xl font-medium text-black font-display tracking-tight"
                  >
                    <span>{PORTFOLIO_INFO.socials.email}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="group text-xs font-sans font-medium px-3 py-1 rounded-full bg-black/[0.05] hover:bg-black/[0.1] text-black/70 transition-colors cursor-pointer"
                  >
                    <RollingText text={t(copiedEmail ? '✓ Copied' : 'Copy')} />
                  </button>
                </div>
              </div>
            </FadeInView>

            {/* Location & Status note */}
            <FadeInView delay={0.3} className="pt-4 border-t border-black/[0.06] text-sm font-sans text-black/60 space-y-1.5">
              <div>{t("Location")}: {PORTFOLIO_INFO.location}</div>
            </FadeInView>
          </div>

          {/* Right Column: Vexoo Inquiry Form Card */}
          <FadeInView delay={0.2} className="lg:col-span-7">
            <div className="vexoo-card p-8 sm:p-10 md:p-12">
              {submitted ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-medium text-black font-display tracking-tight">
                    {t("Cảm ơn bạn đã gửi tin nhắn!")}
                  </h3>
                  <p className="text-sm text-black/60 max-w-md mx-auto leading-relaxed">
                    {t("Tôi đã nhận được thông tin và sẽ phản hồi sớm nhất có thể qua email của bạn.")}
                  </p>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-black/[0.05] hover:bg-black/[0.1] text-xs font-sans font-medium text-black transition-colors cursor-pointer"
                    >
                      {t("Gửi tin nhắn khác")}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-black/70 font-sans">
                      {t("Full name")}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("ex. Nguyen Thanh Sang")}
                      className="w-full px-5 py-3.5 rounded-2xl bg-black/[0.04] border border-transparent focus:border-black/20 focus:bg-white text-sm text-black font-sans placeholder-black/35 outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="block text-xs font-medium text-black/70 font-sans">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="hello@website.com"
                      className="w-full px-5 py-3.5 rounded-2xl bg-black/[0.04] border border-transparent focus:border-black/20 focus:bg-white text-sm text-black font-sans placeholder-black/35 outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Purpose of Contact */}
                  <div className="space-y-3 pt-2">
                    <span className="block text-xs font-medium text-black/70 font-sans">
                      {t("Purpose of Contact")}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {contactPurposes.map((purpose) => {
                        const isSelected = selectedPurpose === purpose;
                        return (
                          <button
                            type="button"
                            key={purpose}
                            onClick={() => setSelectedPurpose(purpose)}
                            className={`w-full text-left px-3.5 py-3 rounded-xl text-xs sm:text-sm font-sans transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${isSelected
                                ? 'bg-[#111111] text-white font-medium shadow-2xs'
                                : 'bg-black/[0.03] hover:bg-black/[0.06] text-black/75'
                              }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'border-white bg-white' : 'border-black/30'
                                }`}
                            >
                              {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#111111]" />}
                            </span>
                            <span className="truncate">{t(purpose)}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Share More Details */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-xs font-medium text-black/70 font-sans">
                      {t("Share More Details")}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t("About your project, timeline, tech requirements...")}
                      className="w-full px-5 py-3.5 rounded-2xl bg-black/[0.04] border border-transparent focus:border-black/20 focus:bg-white text-sm text-black font-sans placeholder-black/35 outline-none transition-all duration-200 resize-none"
                    />
                  </div>

                  {/* Error Alert if needed */}
                  {errorMessage && (
                    <div className="p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-xs sm:text-sm text-red-600 space-y-1 text-left">
                      <p>{errorMessage}</p>
                      <a
                        href={`mailto:${PORTFOLIO_INFO.socials.email}?subject=${encodeURIComponent(`[Portfolio] Liên hệ từ ${formData.name || 'khách truy cập'}`)}&body=${encodeURIComponent(formData.message)}`}
                        className="underline font-medium inline-block hover:opacity-80"
                      >
                        {t("Mở ứng dụng email để gửi trực tiếp")} ↗
                      </a>
                    </div>
                  )}

                  {/* Submit Button with Loading State */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group px-8 py-3.5 rounded-full bg-black text-white hover:bg-black/80 disabled:opacity-60 disabled:cursor-not-allowed font-medium font-sans text-xs transition-all duration-300 cursor-pointer shadow-2xs inline-flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{t("Đang gửi...")}</span>
                        </>
                      ) : (
                        <RollingText text={t("Submit")} />
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </FadeInView>

        </div>

      </div>
    </section>
  );
};
