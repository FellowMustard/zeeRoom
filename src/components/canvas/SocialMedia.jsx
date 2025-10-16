function SocialMedia({ children, activator, type }) {
  function openSocialMedia() {
    if (!activator) return;
    let url = "";
    switch (type) {
      case "INSTAGRAM":
        url = import.meta.env.VITE_INSTAGRAM_LINK;
        break;
      case "LINKEDIN":
        url = import.meta.env.VITE_LINKEDIN_LINK;
        break;
      case "GITHUB":
        url = import.meta.env.VITE_GITHUB_LINK;
        break;
      default:
        return;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  }
  return <group onClick={openSocialMedia}>{children}</group>;
}
export default SocialMedia;
