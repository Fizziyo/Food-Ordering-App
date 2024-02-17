function Button({children,texOnly,className,...props}){

    let cssClasses= texOnly?"text-button":"button";
    cssClasses+= " "+className

    return <button className={cssClasses} {...props}>
        {children}
        </button>
}
export default Button;