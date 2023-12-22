type Session = {
  uid?: string;
  email?: string;
  voting?: {
    isAllowed: boolean;
    votesCasted: number;
  };
};

// Initialize an empty session in the local storage
export function initSession() {
  const session = {
    votes: 0,
  };

  localStorage.setItem("session", JSON.stringify(session));
}

// Read the session from the local storage
export function readSession() {
  const session = localStorage.getItem("session");

  if (session) {
    return JSON.parse(session);
  }

  // If there's no session in the local storage, initialize one
  initSession();
  return readSession();
}

// Edit the session in the local storage
export function editSession(newData: Session) {
  const session = readSession();

  // Merge the new data with the existing session data
  const updatedSession = {
    ...session,
    ...newData,
  };

  localStorage.setItem("session", JSON.stringify(updatedSession));
}
