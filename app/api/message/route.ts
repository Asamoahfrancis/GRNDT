export async function POST(request: Request) {
  const Data = await request.json();
  const { name, email, message } = Data;

  return Response.json({ name, email, message });
}
