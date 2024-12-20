import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faAddressCard, faSignOut } from '@fortawesome/free-solid-svg-icons';
import './styles.dropdown.css';

interface UserProfileCardProps {
    imageUrl: string;
    altText: string;
    name: string;
    description: string;
  
    // Dropdown controls
    onProfile: () => void;
    onSettings: () => void; 
    onLogout: () => void;
  
    isDropdownVisible: boolean;
  }
  
  export default function UserProfileCard({ imageUrl, altText, name, description, onProfile, onSettings, onLogout, isDropdownVisible }: UserProfileCardProps) {
    return (
      <div className="w-64 animated-card-border rounded-lg overflow-hidden bg-custom-color border-solid border-2 border-gray-800 border-opacity-75">
        <div className="flex justify-center">
          <img className="w-full object-cover rounded-t-md" src={imageUrl} alt={altText} />
        </div>
        <hr className="border-gray-800 border-opacity-75" />
        <div className="px-6 py-4 flex-grow justify-items-center">
          <div className="font-bold text-xl mb-2 text-left">{name}</div>
          <p className="text-gray-400 text-base text-left">{description}</p>
        </div>
        <hr className="border-gray-800 border-opacity-75" />
        <div className="px-6 pt-4 pb-2 justify-items-start">
          <div className="grid grid-cols-6 items-center mb-2 mx-4">
            <FontAwesomeIcon icon={faAddressCard} />
            <button
              className="col-span-5 text-left ml-2"
              onClick={onProfile}
            >
              Profile
            </button>
          </div>
          <hr className="border-gray-500 border-opacity-75" />
          <div className="grid grid-cols-6 items-center mb-2 mx-4">
            <FontAwesomeIcon icon={faCog} />
            <button
              className="col-span-5 text-left ml-2"
              onClick={onSettings}
            >
              Settings
            </button>
          </div>
          <hr className="border-gray-800 border-opacity-75" />
          <div className="grid grid-cols-6 items-center mb-2 mx-4">
            <FontAwesomeIcon icon={faSignOut} />
            <button
              className="col-span-5 text-left ml-2"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
          <hr className="border-gray-800 border-opacity-75" />
        </div>
      </div>
    );
  }