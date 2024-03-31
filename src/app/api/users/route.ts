export function GET() {
  console.log("hi");

  return new Response(JSON.stringify([]));
}
