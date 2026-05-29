import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/\D/g, "");
}

export function getWhatsAppLink(phone: string, message?: string): string {
  const formatted = formatPhone(phone);
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${formatted}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}

export function getCallLink(phone: string): string {
  return `tel:${formatPhone(phone)}`;
}
