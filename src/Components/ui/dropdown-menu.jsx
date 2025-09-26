import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu = ({ children }) => {
  return <div className="relative">{children}</div>;
};

const DropdownMenuTrigger = ({ asChild = false, children, ...props }) => {
  return <button {...props}>{children}</button>;
};

const DropdownMenuContent = ({ 
  align = 'end', 
  className = '', 
  children, 
  ...props 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const alignmentClasses = {
    start: 'left-0',
    center: 'left-1/2 transform -translate-x-1/2',
    end: 'right-0'
  };

  return (
    <div className="relative">
      {isOpen && (
        <div
          className={`absolute top-full mt-2 z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md ${alignmentClasses[align]} ${className}`}
          {...props}
        >
          {children}
        </div>
      )}
    </div>
  );
};

const DropdownMenuItem = ({ className = '', ...props }) => {
  return (
    <button
      className={`relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 ${className}`}
      {...props}
    />
  );
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
}; 