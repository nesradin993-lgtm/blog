import {
  isRouteErrorResponse,
  useRouteError,
} from "react-router";
import NotFound from "./NotFound";

export default function RouteError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  return (
    <section role="alert">
      <title>Error · My Blog</title>
      <h1 className="text-3xl font-bold">Something went wrong</h1>
      <p className="mt-4 text-zinc-300">
        {error instanceof Error
          ? error.message
          : "An unexpected error occurred."}
      </p>
    </section>
  );
}