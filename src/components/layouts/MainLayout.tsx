import Footer from '../fragments/Footer';

function MainLayout({ children }: { children: React.ReactNode }) {
     return (
          <div className="w-full flex items-center flex-col justify-center relative">
               <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-12 px-5 gap-x-5 lg:px-12 font-main max-w-[1600px]">{children}</div>
               <Footer />
          </div>
     );
}

export default MainLayout;
