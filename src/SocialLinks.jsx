import SocialLink from "./SocialLink";

function SocialLinks() {
  return (
    <div className="social-links">
      <SocialLink href="https://www.instagram.com/codewroxanna/" icon="instagram" name="Instagram" />
      <SocialLink href="#" icon="react" name="Portafolio" />
      <SocialLink href="https://github.com/Roxannaa" icon="github" name="Github" />
      <SocialLink href="https://www.linkedin.com/in/roxanna-alburquerque-softwaredev/" icon="linkedin" name="LinkedIn" />
      <SocialLink href="https://open.spotify.com/user/84js8xa653bsjhvnzmejkhtvw?si=b58a6cfeac2e43c4" icon="spotify" name="Spotify" />
    </div>
  );
}

export default SocialLinks;
