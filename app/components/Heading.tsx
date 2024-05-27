'use client';

interface HeadingProps {
  title: string;
  subtitle?: string;
  buttonTitle?: string;
  onButtonClick?: () => void;
}

const Heading: React.FC<HeadingProps> = ({
  title,
  subtitle,
  buttonTitle, // Menambahkan buttonTitle di sini
  onButtonClick, // Menambahkan onButtonClick di sini
}) => {
  return (
    // <div className="flex justify-between items-center">
    //   <div className="flex flex-col gap-4">
    //     <h1 className="text-4xl font-semibold">{title}</h1>
    //     <p>{subtitle}</p>
    //   </div>

    // </div>
    <div className="w-full flex flex-col gap-2">
      <div className="flex justify-between">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div>
          {buttonTitle && onButtonClick && (
            <button
              onClick={onButtonClick}
              className="max-h-max px-6 py-4 bg-secondary text-primary rounded-lg"
            >
              {buttonTitle}
            </button>
          )}
        </div>
      </div>
      <p>{subtitle}</p>
    </div>
  );
}

export default Heading;
