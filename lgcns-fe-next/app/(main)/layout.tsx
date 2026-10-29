import CustomTitle from "@/component/atoms/CustomTitle";

export default function MainLayout({children}:{children: React.ReactNode}){
    return (
        <>
        <CustomTitle TitleType="h1" className="text-red-500 text-7xl">Hello</CustomTitle>
        {children}
        </>
    );
}