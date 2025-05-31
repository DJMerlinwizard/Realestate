import { useState } from 'react';

export default function Settings() {
  const [formData, setFormData] = useState({
    username: '',
    topic: '',
    location: '',
    specialties: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add your API call here
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>

        <div>
          <label htmlFor="topic" className="block text-sm font-medium text-gray-700">
            Topic
          </label>
          <input
            id="topic"
            name="topic"
            type="text"
            value={formData.topic}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            id="location"
            name="location"
            type="text"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        <div>
          <label htmlFor="specialties" className="block text-sm font-medium text-gray-700">
            Specialties
          </label>
          <textarea
            id="specialties"
            name="specialties"
            value={formData.specialties}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            rows={3}
          />
        </div>

        <div className="text-sm text-gray-500">
          {/* You can use placeholders like {{username}}, {{topic}}, {{location}}, and {{specialties}}. */}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
}