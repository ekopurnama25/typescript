import { useEffect, ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

export default function Layout({ children, title }: LayoutProps) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
