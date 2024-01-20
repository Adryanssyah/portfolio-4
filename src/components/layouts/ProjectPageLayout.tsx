function ProjectPageLayout({ children, title = '' }: { children: React.ReactNode; title: string }) {
     return (
          <div className="w-full col-span-10 lg:px-10 lg:py-32">
               <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center mb-10">{title}</h2>
               <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10 ">{children}</div>
          </div>
     );
}

export default ProjectPageLayout;
