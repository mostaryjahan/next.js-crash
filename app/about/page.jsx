import Link from "next/link";

const page = () => {
    return (
        <div className="mt-10 bg-gray-400 p-16">
            <h1>This is about</h1>
            <h2>Go to Mission page</h2>
            <p><Link href='/about/.mission'>Click here</Link></p>
            
        </div>
    );
};

export default page;