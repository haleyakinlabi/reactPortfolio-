const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 "
        href="https://www.linkedin.com/in/haley-akin-0b0554252/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="https://img.icons8.com/material-sharp/48/linkedin--v1.png" />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/wasatchtimpanogos?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="https://img.icons8.com/material-outlined/48/github.png" />
      </a>
      
    </div>
  );
};

export default SocialMediaIcons;
