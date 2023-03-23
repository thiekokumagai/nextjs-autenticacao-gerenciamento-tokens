function AuthPageSSR(props){
    return(
        <>
        <div>
            <h1>Auth Page Side Render</h1>
        </div>
        <pre>
            {JSON.stringify(props,null,2)}
        </pre>
        </>
    )
}
export default AuthPageSSR;