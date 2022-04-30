import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import Characters from "./Characters";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Rick And Morty Characters</h1>
        <QueryClientProvider client={queryClient}>
          <Characters />
        </QueryClientProvider>
      </div>
    </div>
  );
}

export default App;
