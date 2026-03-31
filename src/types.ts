export interface SectionProps {
  type?: string;
  heading?: string;
  subtext?: string;
  button_text?: string;
  fields?: string[];
  items?: string[];
  image_url?: string;
  styles?: {
    background?: string;
    text_color?: string;
    accent?: string;
  };
}

export interface PageConfig {
  id: string;
  name: string;
  path: string;
  children?: PageConfig[];
}
