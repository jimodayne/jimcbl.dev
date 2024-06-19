import { SOCIAL_NETWORK_LINKS, SocialNetworkType } from '@/app/props';
import { IconType } from 'react-icons';
import { FaLinkedin, FaGithub, FaTelegram, FaUnsplash, FaInstagram } from 'react-icons/fa';

const socialIcons: Record<SocialNetworkType, IconType> = {
  linkedin: FaLinkedin,
  github: FaGithub,
  telegram: FaTelegram,
  unsplash: FaUnsplash,
  instagram: FaInstagram,
};

export const SocialNetworkIcons = (props: any) => {
  const { className } = props;

  return (
    <div className={'flex gap-4 py-2 ' + className}>
      {Object.entries(socialIcons).map(([key, Icon]) => {
        return (
          <a key={key} target="_blank" href={SOCIAL_NETWORK_LINKS[key as SocialNetworkType]}>
            <Icon
              size={28}
              className="transition dark:hover:text-white duration-300 hover:text-black dark:hover:opacity-100 hover:scale-110"
            />
          </a>
        );
      })}
    </div>
  );
};

const SocialNetwork = () => {
  return (
    <div className="social hidden lg:block py-4 mb-6">
      <a href="mailto:jimtran98@gmail.com" className="mb-2 block transition duration-300 hover:opacity-60">
        jimtran98@gmail.com
      </a>

      <div className="mb-2">
        <a> Lahti, Finland </a>
      </div>

      <SocialNetworkIcons />
    </div>
  );
};

export default SocialNetwork;
