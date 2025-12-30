import Navigation from "@/components/site/Navigation";
import Footer from "@/components/site/Footer";
import "@/styles/site-globals.css"
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
