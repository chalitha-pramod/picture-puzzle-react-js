/**
 * Render a rounded button with light blue/indigo background
 * @param {string|JSX.Element} children - the content to render inside the button
 * @param {object} rest - other attributes to pass on to the <button /> component (mostly the onClick attribute)
 * @returns {JSX.Element}
 * @constructor
 */
const ControlButton = ({children, ...rest}) => {
    return (
        <button
            {...rest}
            className="w-full border-2 border-teal-400 px-4 py-1 md:p-2 rounded-full bg-gradient-to-r
            from-teal-400 to-teal-400 text-indigo-900 text-sm md:text-md
            hover:from-slate-900 hover:to-slate-900 hover:text-indigo-100 hover:border-slate-900
            active:to-blue-900  active:to-indigo-900 relative hover:-top-1 transition-all duration-300

            hover:shadow-md hover:shadow-slate-900"
        >
            {children}
        </button>
    );
}

export default ControlButton;