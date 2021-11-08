

export default function Notes({text }) {
    return (
        <div className={`px-4 relative mx-2 md:mx-0 bg-[#DBEAFE] info-box rounded-md italic`}>
            <span className="info-box__icon ">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " viewBox="0 0 20 20" fill="#6366F1">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
            </span>
            <p className="p-2 text-gray-600 dark:text-gray-200 ">
                {text}
            </p>
        </div>
    )
}
