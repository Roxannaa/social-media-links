function SocialLink({ href, icon, name }) {
  return (
    <div className={name.toLowerCase()}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <i className={`fa-brands fa-${icon}`}></i>
        <h5>{name}</h5>
      </a>
    </div>
  );
}

export default SocialLink;