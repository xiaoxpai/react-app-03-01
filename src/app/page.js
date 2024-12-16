import Link from "next/link";


function Page(){
   // 演示声明一组路由 | 调用API接口获取路由数据
   const clients =[
      {id: 'max', name: 'Maximilian'},
      {id: 'manu', name: 'Manuel'}
   ];
   return(
       <div>
          <h1>app/page</h1>
          <ul>
             {clients.map(client => (
                 <li key={client.id}>
                    <Link href={`/clients/${client.id}`}>{client.name}</Link>
                    {/*<Link href='/clients/'>{client.name}</Link>*/}
                 </li>
             ))}
          </ul>
       </div>

   )
}

export default Page

/**
 * @see https://nextjs.org/docs/messages/app-dir-dynamic-href
 * 这种方式已不支持
 * <Link
 *   href={{
 *     pathname: '/route/[slug]',
 *     query: { slug: '1' },
 *   }}
 * >
 *   link
 * </Link>
 */