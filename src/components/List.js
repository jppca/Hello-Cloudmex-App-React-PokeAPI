import React from "react";

export function List({ children }) {
    return (
      <div className ="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 my-10">
        {children} 
      </div>
    );
}
