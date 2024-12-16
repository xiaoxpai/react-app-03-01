import {useRouter}   from "next/router";
function ClientProjectsPage(){
    const router = useRouter();
    console.log(router.query);

    function loadProjectHandler(){
        router.push('/clients/max/projecta').then(r => console.log(r));
    }
    return (
        <div>
            <h1>This is Client  index Page</h1>
            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientProjectsPage;