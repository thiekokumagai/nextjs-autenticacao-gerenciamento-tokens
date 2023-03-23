function AuthPageStatic(props){
    return(
        <>
        <div>
            <h1>Auth Page Static</h1>
        </div>
        <pre>
            {JSON.stringify(props,null,2)}
        </pre>
        </>
    )
}
export default AuthPageStatic;