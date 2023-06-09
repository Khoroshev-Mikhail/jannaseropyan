export default function Button_play({children, className}: {children: string, className?: string}){
    return (
        <button className={" " + className}>
            {children}
        </button>
    )
}