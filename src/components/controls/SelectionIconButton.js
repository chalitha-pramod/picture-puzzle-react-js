/**
 * Renders a button used to select the size on orientation of the puzzle,
 * Buttons include an icon a name and a value
 * @param {JSX.Element} icon - icon to render
 * @param {string} text - name of the option
 * @param {function} onClick - action to do onClick
 * @param {boolean} active - true if the option is to be shown as selected, false otherwise
 * @param {string|JSX.Element|JSX.Element[]} children - value of the option
 * @returns {JSX.Element}
 * @constructor
 */
const SelectionIconButton = ({icon, text, onClick, active, children}) => {
    return (
        <button
            onClick={onClick}
            className={"rounded-xl p-2 bg-gradient-to-r " +
                (active ? " from-slate-900 to-slate-900 text-slate-900 shadow-md shadow-slate-900"
                    : " from-slate-900 to-slate-900  text-slate-900 ")}
        >
            <div
                className="flex flex-col items-center bg-[#e3e3e377] hover:bg-transparent rounded-xl p-1 md:p-2
                hover:text-white active:bg-[#d1d1d133] gap-1"
            >
                <div className="flex flex-col items-center ">
                    <span className="text-xs">
                        {text}
                    </span>
                    <span className="text-md md:text-lg font-bold">
                        {children}
                    </span>
                </div>

                <span className="text-2xl sm:text-3xl md:text-5xl">
                    {icon}
                </span>
            </div>
        </button>
    );
}

export default SelectionIconButton;
