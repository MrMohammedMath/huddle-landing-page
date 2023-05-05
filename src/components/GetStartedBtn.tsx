export function GetStartedBtn(props: { className?: string }) {

    return (
        <a
            className={`font-openSans font-bold text-xs md:text-xl text-white bg-pink-400 py-3 md:py-6 px-10 md:px-[100px] rounded-[20px] shadow-[0_3px_7px_rgba(0,37,46,0.22)] ${props.className}`}
            href="#">
            Get Started For Free
        </a>
    )
}