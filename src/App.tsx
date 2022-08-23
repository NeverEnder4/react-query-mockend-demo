import { AppProviders } from "./providers/app";

import { Users } from "./components/Users";
import { UserForm } from "./components/UserForm";

import "./App.css";

function App() {
  return (
    <AppProviders>
      <Users />
      <UserForm />
    </AppProviders>
  );
}

export default App;
