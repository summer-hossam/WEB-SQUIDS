/* eslint-disable prettier/prettier */
export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen  font-sans antialiased fontSans.variable">
      {children}
    </div>
  );
}
