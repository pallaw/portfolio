import React, { useState } from 'react';
import { Mail, Linkedin, Github, Phone, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/pallaw.pathak@gmail.com';

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'text-accent-red',
    bg: 'bg-accent-red/10 border-accent-red/20',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Quick Chat',
    href: `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Pallaw, I'd like to discuss a potential opportunity with you.")}`,
    color: 'text-green-400',
    bg: 'bg-green-500/10 border-green-500/20',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: personalInfo.linkedin,
    color: 'text-blue-400',
    bg: 'bg-blue-500/10 border-blue-500/20',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View My Code',
    href: personalInfo.github,
    color: 'text-purple-400',
    bg: 'bg-purple-500/10 border-purple-500/20',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: 'text-accent-red',
    bg: 'bg-accent-red/10 border-accent-red/20',
  },
];

const inputClass = 'w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-accent-red/60 focus:ring-1 focus:ring-accent-red/30 transition-colors';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">Let's Connect</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent-red to-accent-purple mx-auto"></div>
            <p className="text-gray-400 max-w-xl mx-auto">
              Open to consulting, leadership roles, or just a good conversation about mobile engineering.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="bg-gray-900/50 border-gray-800 p-6 sm:p-8 h-full">
                <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>

                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center">
                    <CheckCircle className="text-emerald-400" size={48} />
                    <p className="text-white font-semibold text-lg">Message sent!</p>
                    <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                    <Button
                      variant="outline"
                      className="mt-2 border-gray-700 text-gray-300 hover:border-accent-red hover:text-white"
                      onClick={() => setStatus('idle')}
                    >
                      Send another
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-400 mb-1.5">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5">Message</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        placeholder="What's on your mind?"
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 text-sm">
                        <AlertCircle size={16} />
                        Something went wrong. Try emailing directly.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full bg-gradient-to-r from-accent-red to-accent-purple hover:opacity-90 text-white font-semibold py-3 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        'Sending…'
                      ) : (
                        <>
                          <Send size={16} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </Card>
            </div>

            {/* Contact Methods */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900/50 border-gray-800 p-6 sm:p-8 h-full space-y-5">
                <h3 className="text-xl font-bold text-white">Or reach out directly</h3>
                <div className="space-y-3">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  return (
                    <a
                      key={method.label}
                      href={method.href}
                      target={method.label === 'Email' ? '_self' : '_blank'}
                      rel="noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl border ${method.bg} hover:scale-[1.02] transition-all duration-200 group`}
                    >
                      <div className={`p-2.5 rounded-lg bg-black/30`}>
                        <Icon className={method.color} size={20} />
                      </div>
                      <div>
                        <p className="text-white font-semibold text-sm">{method.label}</p>
                        <p className="text-gray-400 text-xs">{method.value}</p>
                      </div>
                    </a>
                  );
                })}
                </div>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
