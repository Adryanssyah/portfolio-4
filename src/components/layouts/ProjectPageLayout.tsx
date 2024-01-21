function ProjectPageLayout({ children, title = '' }: { children: React.ReactNode; title: string }) {
     return (
          <div className="w-full col-span-10 lg:px-10 mb-28 lg:mb-0 lg:py-32">
               <h1 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight mt-20 lg:mt-0 text-center mb-10">{title}</h1>
               <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 my-8">{children}</div>
          </div>
     );
}

export default ProjectPageLayout;
