import React from "react";

export default function FormGrid({ children, cols = 2 }) {
    const childArray = React.Children.toArray(children);
    return (
        <div className="flex flex-wrap -mx-3">
            {childArray.map((child, idx) => {
                const wantsFull = child.props && typeof child.props.className === 'string' && child.props.className.includes('fullWidth');
                const base = wantsFull ? 'w-full px-3' : cols === 2 ? 'w-1/2 px-3' : 'w-full px-3';
                return (
                    <div key={idx} className={base}>
                        {child}
                    </div>
                );
            })}
        </div>
    );
}