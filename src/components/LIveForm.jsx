import { useState } from 'react';
export default function LiveForm() {
  const [form, setForm] = useState({ name: '', email: '' });
  return (
    <div className="card">
      <h3>Live Form</h3>
      <input
        placeholder="Name"
        value={form.name}
        onChange={e => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
      />
      <p>Name: {form.name || '-'} | Email: {form.email || '-'}</p>
    </div>
  );
}
