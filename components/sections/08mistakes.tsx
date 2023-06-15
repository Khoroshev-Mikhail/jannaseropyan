export default function Mistakes(){
    return (
        <section className="_section relative mt-20 flex justify-between w-full pb-[50%] sm:pb-[33.333%] md:pb-0 md:mt-40">

            <div className="absolute z-20 w-full h-full flex justify-center max-w-[1138px]">
                <div className="w-1/2 h-full bg-[url('/images/gears.webp')] bg-bottom md:bg-right bg-contain bg-no-repeat sm:w-1/3 md:w-full">
                    {/* эти блоки для бэкграудна (шестерёнки) */}
                </div>
            </div>

            <div className="_wrapper ">
                <div className="w-full md:py-10">
                    <div className="bg-_mainbg rounded-lg p-8 _text-14-20 md:w-10/12">
                        <div className="md:w-3/4 md:relative md:z-30">
                            <p className="_text-bold-14-24 text-_purple">И здесь не поможет подход «просто много петь»...</p>
                            <p className="">Просто менять репетиторов… Просто ходить в караоке…</p>
                            <p className="mt-6">Нужна система, по которой вы двигаетесь - и получаете корректировки на каждом уроке</p>
                            <p className="mt-4">Закрепляете правильные навыки, убираете ошибки, повторяете…</p>
                            <p className="font-bold mt-4">И начинаете красиво звучать - уже на автомате!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}