import { Calendar, Clock, MapPin, Users, Globe, Building2, Laptop } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { AnimatedItem } from "@/components/ui/animated-section";

interface EventCardProps {
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  type: string;
  typeLabel: string;
  price: string;
  spots: string;
  spotsLeftLabel: string;
  registerLabel: string;
  freeLabel: string;
  index: number;
  isRTL: boolean;
}

const typeIcons: Record<string, typeof Globe> = {
  online: Globe,
  inPerson: Building2,
  hybrid: Laptop,
};

const typeColors: Record<string, string> = {
  online: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  inPerson: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  hybrid: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

const EventCard = ({
  title,
  description,
  location,
  date,
  time,
  type,
  typeLabel,
  price,
  spots,
  spotsLeftLabel,
  registerLabel,
  freeLabel,
  index,
  isRTL,
}: EventCardProps) => {
  const TypeIcon = typeIcons[type] || Globe;
  const isFree = price === "Free" || price === "مجاني";

  return (
    <AnimatedItem index={index}>
      <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-300 h-full flex flex-col">
        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-primary to-accent" />

        <div className={cn("p-6 flex flex-col flex-1", isRTL && "text-right")}>
          {/* Type & Price badges */}
          <div className={cn("flex items-center gap-2 flex-wrap mb-4", isRTL && "flex-row-reverse")}>
            <span className={cn("inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium", typeColors[type] || typeColors.online, isRTL && "flex-row-reverse")}>
              <TypeIcon className="h-3 w-3" />
              {typeLabel}
            </span>
            <span className={cn(
              "px-3 py-1 rounded-full text-xs font-medium",
              isFree
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300"
            )}>
              {isFree ? freeLabel : price}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-5 flex-1 line-clamp-3">{description}</p>

          {/* Details */}
          <div className="space-y-2.5 mb-5">
            <div className={cn("flex items-center gap-2 text-sm text-muted-foreground", isRTL && "flex-row-reverse")}>
              <Calendar className="h-4 w-4 text-primary shrink-0" />
              <span>{date}</span>
            </div>
            <div className={cn("flex items-center gap-2 text-sm text-muted-foreground", isRTL && "flex-row-reverse")}>
              <Clock className="h-4 w-4 text-primary shrink-0" />
              <span>{time}</span>
            </div>
            <div className={cn("flex items-center gap-2 text-sm text-muted-foreground", isRTL && "flex-row-reverse")}>
              <MapPin className="h-4 w-4 text-primary shrink-0" />
              <span>{location}</span>
            </div>
            <div className={cn("flex items-center gap-2 text-sm text-muted-foreground", isRTL && "flex-row-reverse")}>
              <Users className="h-4 w-4 text-primary shrink-0" />
              <span dir="ltr">{spots} {spotsLeftLabel}</span>
            </div>
          </div>

          {/* Register button */}
          <Button className="w-full" size="lg">
            {registerLabel}
          </Button>
        </div>
      </div>
    </AnimatedItem>
  );
};

export default EventCard;
