export default function FooterComponent() {
  return (
    <>
      <footer className="text-white text-center py-4">
        <p className="text-sm">
          {" "}
          &copy; {new Date().getFullYear()} Pink Spoon. All rights reserved.{" "}
        </p>
      </footer>
    </>
  );
}
