export function toIsoDate(date: Date = new Date()): string {
  return date.toISOString();
}

export function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function isDue(isoDate: string, now: Date = new Date()): boolean {
  return new Date(isoDate).getTime() <= now.getTime();
}

export function formatShortDate(isoDate?: string): string {
  if (!isoDate) {
    return "Nunca";
  }

  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  }).format(new Date(isoDate));
}
