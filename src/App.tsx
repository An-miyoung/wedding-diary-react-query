import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <h2>Hello~</h2>
      </div>
    </QueryClientProvider>
  );
}

export default App;
