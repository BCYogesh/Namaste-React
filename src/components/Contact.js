const Contact = () => {
    return (
        <div className="p-4 m-4">
            <h1 className="font-bold text-2xl m-2 p-2">Contact us page</h1>
            <form action="">
                <input type="text" placeholder="name" className="border border-black m-2 p-2" />
                <input type="text" placeholder="message" className="border border-black m-2 p-2" />
                <button type="button" className="border border-black bg-green-200 m-2 p-2 px-6 rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;