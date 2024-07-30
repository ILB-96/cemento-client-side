import React from "react";

export const Icons = {
  Exit: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  Menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="2em"
      width="2em"
      {...props}
    >
      <path d="M4 12h16M4 6h16M4 18h16" />
    </svg>
  ),
  Filter: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1rem"
      width="1rem"
      {...props}
    >
      <path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </svg>
  ),
  FilterX: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1rem"
      width="1rem"
      {...props}
    >
      <path d="M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055M22 3l-5 5M17 3l5 5" />
    </svg>
  ),
  github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-label="Private Repository"
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 00-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 004 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 18c-4.51 2-5-2-7-2" />
    </svg>
  ),
  linkedin: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      aria-label="Linkedin"
      {...props}
    >
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <path d="M6 4 A2 2 0 0 1 4 6 A2 2 0 0 1 2 4 A2 2 0 0 1 6 4 z" />
    </svg>
  ),
  ArrowDown: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M12 17V3M6 11l6 6 6-6M19 21H5" />
    </svg>
  ),
  ArrowRight: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M17 12H3M11 18l6-6-6-6M21 5v14" />
    </svg>
  ),
  JSON: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" />
      <path d="M14 2v6h6M10 12a1 1 0 00-1 1v1a1 1 0 01-1 1 1 1 0 011 1v1a1 1 0 001 1M14 18a1 1 0 001-1v-1a1 1 0 011-1 1 1 0 01-1-1v-1a1 1 0 00-1-1" />
    </svg>
  ),
  CSV: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      fill="none"
      viewBox="0 0 15 15"
      height="1.4em"
      width="1.4em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13.5 3.5h.5v-.207l-.146-.147-.354.354zm-3-3l.354-.354L10.707 0H10.5v.5zm-4 6V6H6v.5h.5zm0 2H6V9h.5v-.5zm2 0H9V8h-.5v.5zm0 2v.5H9v-.5h-.5zm2-1H10v.207l.146.147.354-.354zm1 1l-.354.354.354.353.354-.353-.354-.354zm1-1l.354.354.146-.147V9.5h-.5zm-10-3V6H2v.5h.5zm0 4H2v.5h.5v-.5zM2 5V1.5H1V5h1zm11-1.5V5h1V3.5h-1zM2.5 1h8V0h-8v1zm7.646-.146l3 3 .708-.708-3-3-.708.708zM2 1.5a.5.5 0 01.5-.5V0A1.5 1.5 0 001 1.5h1zM1 12v1.5h1V12H1zm1.5 3h10v-1h-10v1zM14 13.5V12h-1v1.5h1zM12.5 15a1.5 1.5 0 001.5-1.5h-1a.5.5 0 01-.5.5v1zM1 13.5A1.5 1.5 0 002.5 15v-1a.5.5 0 01-.5-.5H1zM9 6H6.5v1H9V6zm-3 .5v2h1v-2H6zM6.5 9h2V8h-2v1zM8 8.5v2h1v-2H8zm.5 1.5H6v1h2.5v-1zM10 6v3.5h1V6h-1zm.146 3.854l1 1 .708-.708-1-1-.708.708zm1.708 1l1-1-.708-.708-1 1 .708.708zM13 9.5V6h-1v3.5h1zM5 6H2.5v1H5V6zm-3 .5v4h1v-4H2zm.5 4.5H5v-1H2.5v1z"
      />
    </svg>
  ),
};
