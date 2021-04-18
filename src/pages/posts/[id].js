import Layout from '../../components/Layout'

export default function Post({ user }) {
    return (
        <Layout>
            <h1>Hello</h1>
            <div>
                <h2>{user.name}</h2>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.address.city}</p>
                <p>{user.address.street}</p>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    let url = "https://jsonplaceholder.typicode.com/users"
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data)

    // Get all id
    const paths = data.map(el => {
        return {
            params: { id: el.id.toString() }
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const id = params.id
    let url = "https://jsonplaceholder.typicode.com/users/" + id
    const res = await fetch(url)
    const user = await res.json()
    return {
        props: {
            user
        }
    }
}
