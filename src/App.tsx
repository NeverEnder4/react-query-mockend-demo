import { AppProviders } from "./providers/app";

import { Users } from "./routes/Users";

import "./App.css";

function App() {
  return (
    <AppProviders>
      <Users />
    </AppProviders>
  );
}

export default App;
