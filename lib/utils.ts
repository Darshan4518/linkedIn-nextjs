import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const readFileAsDataUrl = (file: File | Blob): Promise<string> => {
  return new Promise((resolve) => {
    const filereader = new FileReader();
    filereader.onloadend = () => {
      if (typeof filereader.result === "string")
        return resolve(filereader.result);
    };
    filereader.readAsDataURL(file);
  });
};
