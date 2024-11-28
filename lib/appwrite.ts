import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  Query,
} from "react-native-appwrite";

// Configure the Appwrite SDK
export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  projectId: "67483294001371ebb414",
  databaseId: "67483bb50037c1bd0aed",
  userCollectionId: "67483bd7000a4f41540c",
};

// Initialize the Appwrite SDK
const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint) // Your API Endpoint
  .setProject(appwriteConfig.projectId); // Your project ID

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

// Register a new user account and create a new user document in the database
export const createUser = async (email: string, password: string, username: string) => {
  try {
      if (!email || !password || !username) {
          throw new Error("Invalid input: Email, password, and username are required.");
      }

      const newAccount = await account.create(ID.unique(), email, password, username);
      if (!newAccount) throw new Error("Account registration failed");

      const avatarUrl = avatars.getInitials(username);

      await signIn(email, password); // Sign in the new user

      const newUser = await databases.createDocument(
          appwriteConfig.databaseId,
          appwriteConfig.userCollectionId,
          ID.unique(),
          {
              accountId: newAccount.$id,
              username,
              email,
              avatar: avatarUrl,
          }
      );
      if (!newUser) throw new Error("User registration failed: Unable to create user document");

      return {
          id: newUser.$id,
          username: newUser.username,
          email: newUser.email,
          avatar: avatarUrl,
      };
  } catch (error) {
      console.error("Error in createUser:", (error as Error).message);
      throw error;
  }
};

// Sign In user
export const signIn = async (email: string, password: string) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    return session;
  } catch (error) {
      console.error("Error in signIn:", (error as Error).message);
      throw new Error("Failed to log in. Please check your credentials.");
  }
};

// Get the current user details from the database
export const getCurrentUser = async () => {
  try {
      const currentAccount = await account.get();
      if (!currentAccount) throw new Error("User account not found");

      const currentUser = await databases.listDocuments(
          appwriteConfig.databaseId,
          appwriteConfig.userCollectionId,
          [Query.equal("accountId", currentAccount.$id)]
      );

      if (!currentUser.documents.length) throw new Error("User not found");

      return currentUser.documents[0];
  } catch (error) {
      console.error("Error in getCurrentUser:", (error as Error).message);
      throw error;
  }
};
