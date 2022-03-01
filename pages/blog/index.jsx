import Layout from "../../components/Layout"
import Link from 'next/link'

export default function index({data}) {
  return (
    <div>
        <Layout
            title="Roel Blog | Agustín Roel y Next.js"
            description="Bienvenidos a mi blog en Next.js">
        <h1>Lista de blog</h1>
        {
            data.map(({id, title, body}) => (
                <div key={id}>
                    <h3>
                        <Link href={`/blog/${id}`}>
                            <a>{id} - {title}</a>
                        </Link>
                    </h3>
                    <p>{body}</p>
                </div>
                
            ))
        }
        </Layout>
    </div>
  )
}

export async function getStaticProps(){
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        return {
            props: {
                data
            }

        }
    } catch (error){
        console.log(error)
    }
}
