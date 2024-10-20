const Input = ({label, ...props}) => {
    return (
        <div className="flex flex-col justify-center mt-4 text-sm">
            <label >{label}</label>
            <input {...props} className="mt-2 bg-gray-50 p-2 w-[20rem] rounded-md"/>
        </div>
    )
}

export default Input;   