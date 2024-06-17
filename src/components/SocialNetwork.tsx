import { FaLinkedin, FaGithub, FaTelegram, FaUnsplash, FaInstagram } from 'react-icons/fa';

const SocialNetwork = () => {
  return (
    <div className="social py-4 mb-6">
      <a href="mailto:jimtran98@gmail.com" className="mb-2 block transition duration-300 hover:opacity-60">
        jimtran98@gmail.com
      </a>

      <div className="mb-2">
        <a> Lahti, Finland </a>
      </div>

      <div className="flex gap-4 py-2">
        <a target="_blank" href="https://linkedin.com/in/thinhtran98/">
          <FaLinkedin size={28} className="transition duration-300 hover:opacity-60" />
        </a>
        <a target="_blank" href="https://github.com/jimodayne">
          <FaGithub size={28} className="transition duration-300 hover:opacity-60" />
        </a>
        <a target="_blank" href="https://t.me/jimtran_hc">
          <FaTelegram size={28} className="transition duration-300 hover:opacity-60" />
        </a>
        <a target="_blank" href="https://unsplash.com/@jimcbl">
          <FaUnsplash size={28} className="transition duration-300 hover:opacity-60" />
        </a>
        <a target="_blank" href="https://instagram.com/jimcbl/">
          <FaInstagram size={28} className="transition duration-300 hover:opacity-60" />
        </a>
      </div>
    </div>
  );
};

export default SocialNetwork;
