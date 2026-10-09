
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  console.log("id: "+id) 
  return (
    <div>
      <main>
        <h1>{id[0]}</h1>
                <h1>{id[1]}</h1>
        <h1>{id[2]}</h1>
        <h1>{id}</h1>

      </main>
    </div>
  )
}