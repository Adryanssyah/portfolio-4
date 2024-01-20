function OtherPageLayout({ children }: { children: React.ReactNode }) {
     return <div className="w-full col-span-10 flex flex-col justify-center items-center lg:px-10">{children}</div>;
}

export default OtherPageLayout;
