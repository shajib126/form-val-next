import React from 'react';

interface FormData {
  name: string;
  email: string;
  age: string;
}

interface FormDataDisplayProps {
  formData?: FormData[];
}

const FormDataDisplay: React.FC<FormDataDisplayProps> = ({ formData }) => {
  if (!formData || formData.length === 0) {
    return <p></p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-lg font-semibold mb-4">Form Data</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Age</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{data.name}</td>
              <td className="border px-4 py-2">{data.email}</td>
              <td className="border px-4 py-2">{data.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormDataDisplay;
