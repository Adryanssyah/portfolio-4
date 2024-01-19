function MainLayout({ children }: { children: React.ReactNode }) {
     return (
          <div className="w-full min-h-screen flex items-center justify-center relative">
               <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 p-5 lg:p-12 font-main max-w-[1600px]">{children}</div>
          </div>
     );
}

export default MainLayout;
