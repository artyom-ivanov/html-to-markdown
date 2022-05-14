interface OutputTextareaProps {
  value: string;
}

export default function OutputTextarea({ value }: OutputTextareaProps) {
  return (
    <textarea
      value={value}
      readOnly
      placeholder="Markdown will appear here"
      className="font-mono bg-transparent w-full border border-gray-700 p-4 rounded-xl h-40 lg:h-96"
    />
  );
}
