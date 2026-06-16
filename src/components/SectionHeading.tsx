interface SectionHeadingProps {
  title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-5 py-1.5 rounded-full text-sm font-medium transition-colors">
        {title}
      </div>
    </div>
  );
}
