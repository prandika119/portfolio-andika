import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/prandika119", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andika-dwi-prasetya-3a529b299", icon: Linkedin },
  { label: "Email", href: "mailto:andika.dwiprasetya119@gmail.com", icon: Mail },
];

export function SocialLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`social-links ${compact ? "social-links-compact" : ""}`}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          aria-label={label}
        >
          <Icon size={compact ? 17 : 18} />
          {!compact && <span>{label}</span>}
        </a>
      ))}
    </div>
  );
}
