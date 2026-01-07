import Team from "@/components/Team";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TeamPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Team />
      </main>
      <Footer />
    </>
  );
}
