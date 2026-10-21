declare module 'lucide-react' {
  import * as React from 'react';
  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }
  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const Check: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Send: LucideIcon;
  export const Loader2: LucideIcon;
  export const Sparkles: LucideIcon;
  export const Star: LucideIcon;
  export const Quote: LucideIcon;
  export const Globe: LucideIcon;
  export const ShoppingCart: LucideIcon;
  export const Bot: LucideIcon;
  export const PhoneCall: LucideIcon;
  export const TrendingUp: LucideIcon;
  export const Search: LucideIcon;
  export const Palette: LucideIcon;
  export const Zap: LucideIcon;
  export const Target: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const Layers: LucideIcon;
  export const Gauge: LucideIcon;
  export const Headphones: LucideIcon;
  export const BarChart3: LucideIcon;
  export const Smartphone: LucideIcon;
  export const Cpu: LucideIcon;
  export const Compass: LucideIcon;
  export const FileText: LucideIcon;
  export const Code2: LucideIcon;
  export const Rocket: LucideIcon;
  export const Building2: LucideIcon;
  export const ExternalLink: LucideIcon;
  export const Mail: LucideIcon;
  export const Phone: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const MessageSquareCheck: LucideIcon;
  export const MessageSquareQuote: LucideIcon;
  export const Clock: LucideIcon;
  export const HelpCircle: LucideIcon;
  export const Users: LucideIcon;
  export const PackageCheck: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Server: LucideIcon;
  export const MapPin: LucideIcon;
  export const HardDrive: LucideIcon;
  export const Activity: LucideIcon;
  export const Award: LucideIcon;
  export const Calendar: LucideIcon;
  export const CheckSquare: LucideIcon;
}
