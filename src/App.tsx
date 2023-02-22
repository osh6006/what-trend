import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query/types/react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navbar />
      <Outlet />
    </QueryClientProvider>
  );
}

export default App;
