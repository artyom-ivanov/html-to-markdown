interface InputTextareaProps {
  value: string;
  onChange: (value: string) => void;
}

export default function InputTextarea({ value, onChange }: InputTextareaProps) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Insert your HTML here"
      className="font-mono bg-transparent w-full border border-gray-700 p-4 rounded-xl h-40 lg:h-96"
    />
  );
}
