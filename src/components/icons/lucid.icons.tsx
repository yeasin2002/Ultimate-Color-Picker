import { cn } from "@/src/utils";
import * as React from "react";

interface Props extends React.ComponentPropsWithoutRef<"svg"> {}

export function Dropper(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-pipette"
      {...props}
    >
      <path d="M2 22l1-1h3l9-9M3 21v-3l9-9" />
      <path d="M15 6l3.4-3.4a2.1 2.1 0 113 3L18 9l.4.4a2.1 2.1 0 11-3 3l-3.8-3.8a2.1 2.1 0 113-3l.4.4z" />
    </svg>
  );
}

export function Palette(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-palette"
      {...props}
    >
      <circle cx={13.5} cy={6.5} r={0.5} fill="currentColor" />
      <circle cx={17.5} cy={10.5} r={0.5} fill="currentColor" />
      <circle cx={8.5} cy={7.5} r={0.5} fill="currentColor" />
      <circle cx={6.5} cy={12.5} r={0.5} fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}

export function WebsiteResponsive(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-proportions"
      {...props}
    >
      <rect width={20} height={16} x={2} y={4} rx={2} />
      <path d="M12 9v11M2 9h13a2 2 0 012 2v9" />
    </svg>
  );
}

export function PaintBrush(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-paintbrush"
      {...props}
    >
      <path d="M14.622 17.897l-10.68-2.913M18.376 2.622a1 1 0 113.002 3.002L17.36 9.643a.5.5 0 000 .707l.944.944a2.41 2.41 0 010 3.408l-.944.944a.5.5 0 01-.707 0L8.354 7.348a.5.5 0 010-.707l.944-.944a2.41 2.41 0 013.408 0l.944.944a.5.5 0 00.707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 00-.302.819l7.32 8.883a1 1 0 001.185.204C12.735 20.405 16 16.792 16 15" />
    </svg>
  );
}

export function Globe(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-paintbrush"
      {...props}
    >
      <path d="M14.622 17.897l-10.68-2.913M18.376 2.622a1 1 0 113.002 3.002L17.36 9.643a.5.5 0 000 .707l.944.944a2.41 2.41 0 010 3.408l-.944.944a.5.5 0 01-.707 0L8.354 7.348a.5.5 0 010-.707l.944-.944a2.41 2.41 0 013.408 0l.944.944a.5.5 0 00.707 0zM9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 00-.302.819l7.32 8.883a1 1 0 001.185.204C12.735 20.405 16 16.792 16 15" />
    </svg>
  );
}

export const Crosshair = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-crosshair"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="22" x2="18" y1="12" y2="12" />
    <line x1="6" x2="2" y1="12" y2="12" />
    <line x1="12" x2="12" y1="6" y2="2" />
    <line x1="12" x2="12" y1="22" y2="18" />
  </svg>
);

export function Trash({ className, ...props }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("lucide lucide-trash-2", className)}
      {...props}
    >
      <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
      <path d="M10 11L10 17" />
      <path d="M14 11L14 17" />
    </svg>
  );
}
