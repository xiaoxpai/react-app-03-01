import Link from "next/link";
function HomePage() {

	// 演示声明一组路由 | 调用API接口获取路由数据
	const clients =[
		{id: 'max', name: 'Maximilian'},
		{id: 'manu', name: 'Manuel'}
	];

	 return (
	 		<div>
	 			<h1>主页面</h1>
				<ul>
					{clients.map(client => (
						<li key={client.id}>
							<Link href={`/clients/${client.id}`}>{client.name}</Link>
						</li>
					))}
				</ul>
	 		</div>
	 	);
}

export default HomePage