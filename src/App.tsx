import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
