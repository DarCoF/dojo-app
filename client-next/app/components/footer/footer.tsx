"use client";
import "./styles_footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-with-sharp-stripes flex items-center px-4 lg:px-12 border-t border-gray-600 ">
                    <div className="grid grid-cols-3 gap-2 w-full text-center">
                        <div className="col-span-1 flex justify-center items-center">
                            <h1 className="text-white font-bold">Contact</h1>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                            <p className="text-2xl text-white">TAP</p>
                        </div>
                        <div className="col-span-1 flex justify-center items-center">
                            <p className="text-white text-base">&copy; 2021 TAP. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;