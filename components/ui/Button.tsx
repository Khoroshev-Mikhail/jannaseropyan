export default function Button({children, className}: {children: string, className?: string}){
    return (
        <button className={"block mx-auto md:mx-0 font-bold border-b-[2px] border-[#540D8E] rounded-[10px/50px] text-_white py-3 px-8 bg-_purple " + className}>
            {children}
        </button>
    )
}