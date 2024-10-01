"use client";

const Button = () => {
    return (
        <div>
            <button onClick={() => console.log("btn")} className="border-2 p-2 rounded mt-4 bg-green-500">Click here</button>
        </div>
    );
};

export default Button;