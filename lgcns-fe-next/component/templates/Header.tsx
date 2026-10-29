import Logo from "../organisms/Logo";
import GlobalNavigation from "../organisms/GlobalNavigation";

export default function Header(){
    return (
        <header className="flex flex-row justify-between items-center gap-10 h-125 px-20">
            <Logo />
            <GlobalNavigation />
        </header>
    );
}