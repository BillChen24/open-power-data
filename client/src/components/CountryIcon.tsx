interface CountryIconProps {
  countryId: string;
  countryName: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const countryStyles: Record<string, { bg: string; text: string }> = {
  china: { bg: "bg-red-700", text: "text-white" },
  india: { bg: "bg-orange-700", text: "text-white" },
  indonesia: { bg: "bg-blue-700", text: "text-white" },
  vietnam: { bg: "bg-yellow-600", text: "text-gray-900" },
  asean: { bg: "bg-green-700", text: "text-white" },
};

const countryAbbreviations: Record<string, string> = {
  china: "CN",
  india: "IN",
  indonesia: "ID",
  vietnam: "VN",
  asean: "ASEAN",
};

const sizeClasses = {
  sm: "w-8 h-8 text-xs",
  md: "w-12 h-12 text-sm",
  lg: "w-16 h-16 text-lg",
  xl: "w-24 h-24 text-2xl",
};

export default function CountryIcon({
  countryId,
  countryName,
  size = "md",
}: CountryIconProps) {
  const styles = countryStyles[countryId] || {
    bg: "bg-primary",
    text: "text-white",
  };
  const abbreviation =
    countryAbbreviations[countryId] ||
    countryName.substring(0, 2).toUpperCase();
  const sizeClass = sizeClasses[size];

  return (
    <div
      className={`${sizeClass} ${styles.bg} ${styles.text} rounded-full flex items-center justify-center font-semibold`}
      data-testid={`icon-country-${countryId}`}
    >
      {abbreviation}
    </div>
  );
}
