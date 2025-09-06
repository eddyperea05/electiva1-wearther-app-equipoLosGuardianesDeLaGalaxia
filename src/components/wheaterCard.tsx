export interface WeatherData {
  feelsLikeC: any;
  city: string;
  tempC: number; 
  humidity: number; 
  description: string; 
  icon?: string; 
}

type Variant = "small" | "medium" | "detailed";

interface WeatherCardProps {
  data?: WeatherData | null; 
  variant?: Variant;
  onClick?: () => void;
}

function Icon({ icon, alt }: { icon?: string; alt?: string }) {
  if (!icon) {
    return (
      <svg
        className="w-12 h-12"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 13h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  return <img src={url} alt={alt ?? "icono del clima"} className="w-12 h-12" />;
}

export default function WeatherCard({ data, variant = "medium", onClick }: WeatherCardProps) {
  if (data === undefined) {
    return (
      <div className="animate-pulse p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 w-full max-w-sm">
        <div className="h-6 bg-white/10 rounded w-2/3 mb-4" />
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 bg-white/10 rounded-full" />
          <div className="flex-1">
            <div className="h-4 bg-white/10 rounded mb-2" />
            <div className="h-3 bg-white/8 rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  if (data === null) {
    return (
      <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 max-w-sm">
        <div className="font-semibold">Error</div>
        <div className="text-sm">No se pudieron obtener los datos del clima. Intenta otra ciudad.</div>
      </div>
    );
  }

  const temp = Math.round(data.tempC);
  const feels = data.feelsLikeC ? Math.round(data.feelsLikeC) : undefined;

  if (variant === "small") {
    return (
      <button
        onClick={onClick}
        className="flex items-center gap-3 p-3 rounded-xl shadow-sm bg-white/6 hover:bg-white/8 transition max-w-xs"
      >
        <Icon icon={data.icon} alt={data.description} />
        <div className="text-left">
          <div className="font-medium">{data.city}</div>
          <div className="text-sm text-white/80">{temp}°C · {data.description}</div>
        </div>
      </button>
    );
  }

  if (variant === "detailed") {
    return (
      <div
        onClick={onClick}
        className="p-6 rounded-2xl bg-gradient-to-br from-sky-600/20 to-indigo-700/12 border border-white/6 shadow-lg w-full max-w-md cursor-pointer"
      >
        <div className="flex justify-between items-start">
          <div>
            <div className="text-2xl font-semibold">{data.city}{ ""}</div>
            <div className="text-sm text-white/80">{data.description}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl font-bold">{temp}°C</div>
            <Icon icon={data.icon} alt={data.description} />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
          <div className="p-3 rounded-lg bg-white/3">Humedad<br /><span className="font-semibold">{data.humidity}%</span></div>
          <div className="p-3 rounded-lg bg-white/3">Sensación<br /><span className="font-semibold">{feels ? `${feels}°C` : `—`}</span></div>
          <div className="p-3 rounded-lg bg-white/3">Viento<br /><span className="font-semibold">{} km/h</span></div>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="p-4 rounded-2xl bg-white/5 border border-white/5 shadow-sm w-full max-w-sm hover:scale-[1.01] transition-transform cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div>
          <div className="text-lg font-medium">{data.city}</div>
          <div className="text-sm text-white/80">{data.description}</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-3xl font-bold">{temp}°C</div>
          <Icon icon={data.icon} alt={data.description} />
        </div>
      </div>

      <div className="mt-3 text-sm text-white/70 grid grid-cols-2 gap-2">
        <div>Humedad: <span className="font-semibold">{data.humidity}%</span></div>
        <div>Sensación: <span className="font-semibold">{data.feelsLikeC ? `${Math.round(data.feelsLikeC)}°C` : '—'}</span></div>
      </div>
    </div>
  );
}
