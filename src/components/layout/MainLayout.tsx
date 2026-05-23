type MainLayoutProps = {
  children: React.ReactNode;
  backgroundColor?: string;
};

export default function MainLayout({
  children,
  backgroundColor = "bg-black",
}: MainLayoutProps) {
  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden text-white ${backgroundColor}`}
    >
      {children}
    </div>
  );
}