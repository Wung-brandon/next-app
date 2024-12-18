import Link from "next/link"

function Home(){
    return (
        <div>
            <h1>Welcome to nextJs</h1>
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <Link href="/users" style={{fontSize:"2rem"}}>Users</Link> 
                <Link href="/users/new" style={{fontSize:"2rem"}}>New Users</Link>
            </div>
        </div>
    )
}
export default Home