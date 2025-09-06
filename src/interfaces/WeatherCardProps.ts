import type { WeatherData } from "../interfaces/WeatherData";

type Variant = "small" | "medium" | "detailed";

export interface WeatherCardProps {
  data?: WeatherData | null; 
  variant?: Variant;
  onClick?: () => void;
}