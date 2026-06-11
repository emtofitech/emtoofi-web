'use client';

import { useState } from 'react';
import { useToast } from './Toast';
import FadeUp from './FadeUp';

export default function ContactForm() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    type: 'Web platform / SaaS',
    budget: '$5k – $15k',
    message: '',
  });

  function handleSubmit() {
    if (!formData.name.trim() || !formData.email.trim()) {
      alert('Please fill in your name and email.');
      return;
    }
    showToast();
    setFormData({ name: '', company: '', email: '', type: 'Web platform / SaaS', budget: '$5k – $15k', message: '' });
  }

  return (
    <FadeUp delay={1} className="contact-form-wrap">
      <div className="form-title">Send us a message</div>
      <div className="form-subtitle">We read every message and reply personally — no bots.</div>
      <div className="form-row">
        <div className="form-group">
          <label>Your name</label>
          <input
            type="text"
            placeholder="Amara Okonkwo"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Company</label>
          <input
            type="text"
            placeholder="Acme Inc."
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          placeholder="amara@company.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Project type</label>
        <select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
          <option>Web platform / SaaS</option>
          <option>Mobile app</option>
          <option>Web + Mobile</option>
          <option>UI/UX design only</option>
          <option>Not sure yet</option>
        </select>
      </div>
      <div className="form-group">
        <label>Budget range (USD)</label>
        <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
          <option>$1.5k – $15k</option>
          <option>$15k – $40k</option>
          <option>$40k – $80k</option>
          <option>$80k+</option>
        </select>
      </div>
      <div className="form-group">
        <label>Tell us about your project</label>
        <textarea
          placeholder="What are you building? What problem does it solve? Any timeline?"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>
      <button className="form-submit" onClick={handleSubmit}>
        Send message — we&apos;ll reply in 24h
      </button>
    </FadeUp>
  );
}
