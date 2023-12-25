/**
 * Button rendered on top of the board over a gradient background
 * @component
 * @param {string|JSX.Element} children - content of the button
 * @param {function} onClick - callback for button click
 * @returns {JSX.Element}
 * @constructor
 */
const BoardAction = ({children, onClick}) => {
    return (
        <div
            className="z-20 absolute w-full h-full flex items-center justify-center"
        >
            <div
                className="bg-gradient-to-br from-[#201d0caa] to-[#00124baa]
                            w-full flex items-center justify-center py-16"
            >
                <button
                    className="bg-gradient-to-r bg-teal-400 rounded-full
                                 px-4 py-2 text-lg md:text-xl text-teal-400 border-2 border-slate-900
                                 hover:to-slate-900 hover:from-slate-900 hover:text-white
                                 relative hover:-top-1 transition-all duration-300
                                 hover:shadow-lg hover:shadow-slate-900
                                 flex flex-row gap-2 items-center justify-center
                                 active:from-sky-700 active:to-sky-700"
                    onClick={onClick}
                >
                    {children}
                </button>
            </div>
        </div>
    );
}

export default BoardAction;