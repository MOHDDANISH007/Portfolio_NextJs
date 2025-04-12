// components/contact-form.tsx

"use client"

import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Form submitted!');
        console.log(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4">
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full border rounded p-2"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full border rounded p-2"
                value={form.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Your Message"
                className="w-full border rounded p-2"
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
            />
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded">
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
