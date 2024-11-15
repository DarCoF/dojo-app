import './styles.card.css';

interface CardProps {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  tags: string[];
  buttonTag: string;
}

export default function Card({ imageUrl, altText, title, description, tags, buttonTag }: CardProps) {
  return (
    <div className="card glow max-w-sm rounded-lg overflow-hidden bg-custom-color border-solid border-2 border-gray-800 border-opacity-75 flex flex-col">
      <img className="w-full" src={imageUrl} alt={altText} />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2 text-left">{title}</div>
        <p className="text-gray-400 text-base text-left">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2 flex-grow-0">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <button className="bg-black border-solid border-2 border-gray-800  border-opacity-75 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-600 transition mt-auto mb-4 mx-6">
        {buttonTag}
      </button>
    </div>
  );
}
