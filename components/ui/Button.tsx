export default function Button({children, className}: {children: string, className?: string}){
    return (
        <button className={"hover:px-10 duration-300 block mx-auto min-w-[189px] font-bold border-b-[2px] border-[#540D8E] rounded-[10px/50px] text-_white py-3 px-8 bg-_purple  md:mx-0 max-w:min-w-[283px] " + className}>
            {children}
        </button>
    )
}