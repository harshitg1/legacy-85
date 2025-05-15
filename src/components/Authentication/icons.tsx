import {
  LineChart,
  Twitter,
  Github,
  BookOpen,
  Package,
  FileBadge,
  PanelsTopLeft,
  Blocks,
  Chrome,
  Apple,
  CreditCard,
  Loader2,
} from "lucide-react";


const RadixLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

type IconProps = React.ComponentProps<typeof LineChart>;

export const Icons = {
  logo: (props: IconProps) => <LineChart {...props} strokeWidth={2} />,
  twitter: (props: IconProps) => <Twitter {...props} />,
  gitHub: (props: IconProps) => <Github {...props} />,
  radix: (props: IconProps) => <RadixLogo {...props} />,
  // radix: (props: IconProps) => <RadixLogo {...props} />,
  npm: (props: IconProps) => <Package {...props} />,
  yarn: (props: IconProps) => <FileBadge {...props} />,
  pnpm: (props: IconProps) => <PanelsTopLeft {...props} />,
  react: (props: IconProps) => <Blocks {...props} />,
  tailwind: (props: IconProps) => <Blocks {...props} strokeWidth={1.5} />,
  google: (props: IconProps) => <Chrome {...props} />,
  apple: (props: IconProps) => <Apple {...props} />,
  paypal: (props: IconProps) => <CreditCard {...props} />,
  spinner: (props: IconProps) => (
    <Loader2 {...props} className={`${props.className || ""} animate-spin`} />
  ),
};
