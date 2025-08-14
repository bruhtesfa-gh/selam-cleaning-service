/*
================================================================================
| FILE: /components/landing/Footer.tsx
|
| A simple Server Component for the page footer.
================================================================================
*/
export const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 py-6 text-sm">
        <p>
          © {new Date().getFullYear()} Selam Home & Office Cleaning Services
        </p>
        <p className="text-muted-foreground">
          Your Peace of Mind is Our Priority
        </p>
      </div>
    </footer>
  );
};
