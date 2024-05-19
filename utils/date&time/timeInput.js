import React from 'react';

function TimeInput({ id, label, value, onChange }) {
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutesSeconds = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  const [hour, minute, second] = value ? value.split(':') : ['00', '00', '00'];

  const handleTimeChange = (part, newValue) => {
    const newTime = part === 'hour' ? [newValue, minute, second] : part === 'minute' ? [hour, newValue, second] : [hour, minute, newValue];
    onChange(id, newTime.join(':'));
  };

  return (
    <div className="flex">
      <label htmlFor={id} className="text-sm font-medium leading-6 text-gray-900">{label}:</label>
      <div className="flex sm:col-span-2 mt-1">
        {/* Hour Dropdown */}
        <select value={hour} onChange={(e) => handleTimeChange('hour', e.target.value)}>
          {hours.map((h) => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
        {/* Minute Dropdown */}
        <select value={minute} onChange={(e) => handleTimeChange('minute', e.target.value)}>
          {minutesSeconds.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
        {/* Second Dropdown */}
        <select value={second} onChange={(e) => handleTimeChange('second', e.target.value)}>
          {minutesSeconds.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default TimeInput;
