import React, { createContext } from 'react'

const Usercontext = createContext();

const UserProvider = Usercontext.Provider;
const UserConsumer = Usercontext.Consumer;

export { UserProvider, UserConsumer }