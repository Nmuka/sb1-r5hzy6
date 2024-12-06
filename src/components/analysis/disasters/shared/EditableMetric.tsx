import React, { useState } from 'react';

interface EditableMetricProps {
  label: string;
  value: string | number;
  onSave: (value: string) => void;
}

export function EditableMetric({ label, value, onSave }: EditableMetricProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value.toString());

  const handleSave = () => {
    onSave(editValue);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          className="px-2 py-1 border rounded-md text-sm"
          autoFocus
        />
        <button
          onClick={handleSave}
          className="text-sm text-green-600 hover:text-green-700"
        >
          Save
        </button>
        <button
          onClick={() => setIsEditing(false)}
          className="text-sm text-red-600 hover:text-red-700"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsEditing(true)}
      className="cursor-pointer hover:bg-gray-50 p-1 rounded"
    >
      <p className="text-sm font-medium text-gray-600">{label}</p>
      <p className="text-lg">{value}</p>
    </div>
  );
}