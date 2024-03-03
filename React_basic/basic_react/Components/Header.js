import React from "react";

const Header = () => {
    return (
        <>
            <div className='h-8 bg-green-500 flex items-center justify-between'>
                <h2>Logo</h2>
                <div className="flex gap-2">
                    <h4>Home</h4>
                    <h4>Blog</h4>
                    <h4>About</h4>
                    <h4>Login</h4>
                </div>
            </div>
        </>
    );
}

export default Header;
