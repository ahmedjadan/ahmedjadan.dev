
export default function CodeSnippet({ title, snippet, language }) {
    return (
        <div className="bg-gray-100">
            <h2 className="prose text-indigo-500"> {title} </h2>
            <pre className={`language-${language}`}> <code className={`language-${language}`}> {snippet} </code> </pre>
        </div>
    )
}
